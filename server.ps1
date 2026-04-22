$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:8000/")
$listener.Start()
Write-Host "Serving http://localhost:8000/ - Press Ctrl+C to stop"
$root = "C:\games\memorey-game"
$mime = @{
  ".html"="text/html"; ".htm"="text/html"; ".css"="text/css"
  ".js"="application/javascript"; ".json"="application/json"
  ".png"="image/png"; ".jpg"="image/jpeg"; ".jpeg"="image/jpeg"
  ".gif"="image/gif"; ".svg"="image/svg+xml"; ".ico"="image/x-icon"
  ".woff"="font/woff"; ".woff2"="font/woff2"
  ".mp3"="audio/mpeg"; ".wav"="audio/wav"
  ".webmanifest"="application/manifest+json"
}
while ($listener.IsListening) {
  try {
    $ctx = $listener.GetContext()
    $path = [Uri]::UnescapeDataString($ctx.Request.Url.AbsolutePath)
    if ($path -eq "/") { $path = "/index.html" }
    $file = Join-Path $root $path.TrimStart("/")
    if (Test-Path $file -PathType Leaf) {
      $ext = [IO.Path]::GetExtension($file).ToLower()
      $type = $mime[$ext]
      if (-not $type) { $type = "application/octet-stream" }
      $bytes = [IO.File]::ReadAllBytes($file)
      $ctx.Response.ContentType = $type
      $ctx.Response.ContentLength64 = $bytes.Length
      $ctx.Response.OutputStream.Write($bytes, 0, $bytes.Length)
    } else {
      $ctx.Response.StatusCode = 404
    }
    $ctx.Response.Close()
  } catch {}
}
