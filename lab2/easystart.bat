@pushd
@cd api
@start "api server" npm start
@cd ..
@cd proxy
@timeout /t 2 /nobreak > NUL
@start "proxy server" npm start
@popd