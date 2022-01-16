const Proyectos = require("../models/Proyectos");

exports.proyectosHome = (req, res) => {
    res.render("index", {
        nombrePagina: "Proyectos"
    });
};

exports.formularioProyecto = (req, res) => {
    res.render("nuevo-proyecto", {
        nombrePagina: "Nuevo Proyecto"
    });
};

exports.nuevoProyecto = (req, res) => {
    // Enviar a la consola lo que el usuario escriba.
    // console.log(req.body);

    // Validamos que tengamos algo en el input
    const { nombre } = req.body;
    
    let errores = [];

    if (!nombre) {
        errores.push({"texto": "Agrega un Nombre al Proyecto"});
    }

    // si hay errores 
    if (errores.length > 0) {
        res.render("nuevo-proyecto", {
            nombrePagina: "Nuevo Proyecto",
            errores
        })
    } else {
        // No hay errores
        // Insertar en la BD
        Proyectos.create({ nombre })
            .then(() => console.log("Insertado correctamente"))
            .catch(error => console.log(error))
    }
};