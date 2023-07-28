This is a simple weather app built with React and Typescript.

To run the app, clone the repository and install the dependencies:

```
git clone https://github.com/juanma-dev/weather-app.git
cd weather-app
npm install
```

Then, run the app:

```
npm start
```

The app will be available at http://localhost:3000.

The app consists of two components: `Formulario` and `Resultado`.

The `Formulario` component renders a form with two inputs: one for the city and one for the country. When the user submits the form, the `Formulario` component calls the `consultarClima` method of the `ClimaProvider` context to get the weather data for the specified city.

The `Resultado` component renders the weather data. If the `consultarClima` method returns an error, the `Resultado` component will display a message indicating that no results were found. Otherwise, the `Resultado` component will display the following information:

* The current temperature
* The weather description
* The time
* The minimum temperature
* The wind speed
* The wind gusts
* The humidity
* The pressure
* The sunrise time
* The sunset time

The `Resultado` component also uses the `FormatHora` hook to format the time and date values.

The `ClimaProvider` context provides the following properties:

* `busqueda`: The city and country that the user is searching for.
* `datosBusqueda`: A function that the `Formulario` component can use to update the `busqueda` property.
* `consultarClima`: A function that the `Formulario` component can use to get the weather data for the specified city.
* `resultado`: The weather data for the specified city.
* `cargando`: A boolean value that indicates whether the weather data is being loaded.
* `sinResultados`: A boolean value that indicates whether no results were found for the specified city.
* `prov`: The state or province of the specified city.

The `ClimaProvider` context is used to share data between the `Formulario` and `Resultado` components.

The `FormatHora` hook is used to format the time and date values. The `Format