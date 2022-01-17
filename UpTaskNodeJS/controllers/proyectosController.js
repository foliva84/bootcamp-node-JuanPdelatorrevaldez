const Proyectos = require("../models/Proyectos");
const slug = require("slug");

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

exports.nuevoProyecto = async (req, res) => {
    // Enviar a la consola lo que el usuario escriba.
    // console.log(req.body);

    // Validamos que tengamos algo en el input
    // const { nombre } = req.body;
    const nombre = req.body.nombre;

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
        const url = slug(nombre).toLowerCase();
        const proyecto = await Proyectos.create({ nombre, url });
        res.redirect("/");
    }
};