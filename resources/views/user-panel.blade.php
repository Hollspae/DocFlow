<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Панель пользователя</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>

<body>
    <div id="app">
        <user-panel></user-panel>
    </div>

    <script type="module" src="{{ Vite::asset('resources/js/app.js') }}"></script>
</body>

</html>
