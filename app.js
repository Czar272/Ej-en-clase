function App(){
    return (
    <div className = "app">         
        <Sidebar color = "black" txt1 = "Inicio:" txt2 = "Info:"/>
        <ContColumn />
    
    </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("contenedor"))
