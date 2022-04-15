# Jxtau
boilerplate for api .net core and client angular

Dotnet - new web api project
- dotnet –info
- dotnet new -h
- dotnet new sln
- dotnet new webapi -o Server
- dotnet sln add Server
- dotnet dev-certs https – trust
- cd Server
- dotnet watch run

Dotnet - EF Core
- Install-Package Microsoft.EntityFrameworkCore.SqlServer
- Install-Package Microsoft.EntityFrameworkCore.Design
- Install-Package Microsoft.EntityFrameworkCore.Tools
- https://www.nuget.org/packages/dotnet-ef/
- dotnet ef migrations add InitialCreate -o Data/Migrations
- dotnet ef migrations remove
- dotnet ef database update
- dotnet ef database drop

Angular - new project
- npm install -g @angular/cli@latest
- ng --version
- ng new Client
- cd Client
- ng serve
- ng add @angular/material
- ng add @angular/flex-layout
- ng g s servers/weather –-skip-tests
- ng g c modules/page --module app
- ng g i interceptors/loading
- ng g g guards/auth

Angular - resources
- http://json2ts.com/

VS Code Settings
- exclude bin, obj
- compact folder
- private _, this off

Git
- git status
- git init
- dotnet new gitignore

WYSIWYG 
- Tiny MCE
- Angular Editor

PowerShell
- remove-item node_modules -Recurse -Force

NPM
- npm install
