@echo off
echo 🧹 Limpiando instalación anterior...
echo =====================================

echo 🗑️ Eliminando node_modules...
if exist node_modules rmdir /s /q node_modules

echo 🗑️ Eliminando package-lock.json...
if exist package-lock.json del package-lock.json

echo 📦 Instalando dependencias limpias...
call npm install

echo ✅ ¡Instalación limpia completada!
echo.
echo 🚀 Ahora ejecuta:
echo    npm start
echo.
echo 🌐 Y visita:
echo    http://localhost:3000/portafolionumerodos
echo.
echo ✨ ¡Tu portafolio espectacular estará listo!
pause
