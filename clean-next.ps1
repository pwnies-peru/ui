# Script para limpiar procesos de Next.js y archivos de lock
# Uso: .\clean-next.ps1

Write-Host "🧹 Limpiando procesos y archivos de Next.js..." -ForegroundColor Cyan

# 1. Eliminar archivo de lock
if (Test-Path ".next\dev\lock") {
    Remove-Item ".next\dev\lock" -Force
    Write-Host "✅ Archivo lock eliminado" -ForegroundColor Green
} else {
    Write-Host "ℹ️  No se encontró archivo lock" -ForegroundColor Yellow
}

# 2. Buscar procesos de Node.js relacionados con Next.js
$nodeProcesses = Get-Process | Where-Object {
    $_.ProcessName -eq "node" -and 
    $_.Path -like "*nodejs*"
}

if ($nodeProcesses) {
    Write-Host "`n📋 Procesos de Node.js encontrados:" -ForegroundColor Yellow
    $nodeProcesses | Format-Table Id, ProcessName, @{Label="CPU"; Expression={$_.CPU}}, @{Label="Memory(MB)"; Expression={[math]::Round($_.WorkingSet64/1MB, 2)}} -AutoSize
    
    $response = Read-Host "`n¿Deseas terminar estos procesos? (S/N)"
    if ($response -eq "S" -or $response -eq "s") {
        $nodeProcesses | ForEach-Object {
            try {
                Stop-Process -Id $_.Id -Force
                Write-Host "✅ Proceso $($_.Id) terminado" -ForegroundColor Green
            } catch {
                Write-Host "❌ Error al terminar proceso $($_.Id): $_" -ForegroundColor Red
            }
        }
    }
} else {
    Write-Host "ℹ️  No se encontraron procesos de Node.js" -ForegroundColor Yellow
}

# 3. Limpiar directorio .next (opcional)
$response = Read-Host "`n¿Deseas limpiar el directorio .next? (S/N) - Esto eliminará la caché"
if ($response -eq "S" -or $response -eq "s") {
    if (Test-Path ".next") {
        Remove-Item ".next" -Recurse -Force
        Write-Host "✅ Directorio .next eliminado" -ForegroundColor Green
    }
}

Write-Host "`n✨ Limpieza completada!" -ForegroundColor Cyan
Write-Host "Ahora puedes ejecutar: npm run dev" -ForegroundColor Green

