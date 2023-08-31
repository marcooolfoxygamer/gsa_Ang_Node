const express = require('express')
const mysql = require('mysql')
const bodyParser = require('body-parser')
// npm install md5
const md5 = require('md5')

const app = express()

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next()
})

app.use(bodyParser.json())

const PUERTO = 9300

const conexion = mysql.createConnection(
    {
        host:'localhost',
        database:'bd_gymsenapp',
        user:'root',
        password:''
    }
)

app.listen(PUERTO, () => {
    console.log(`Servidor corriendo en el puerto ${PUERTO}`);
})

conexion.connect(error => {
    if(error) throw error
    console.log('Conexión exitosa a la base de datos');
})


app.get('/', (req, res) => {
    res.send('API')
})




// tipos de usuarios

app.get('/tipos_usuarios', (req, res) => {
    const query = `SELECT * FROM tipos_usuarios`
    conexion.query(query, (error, resultado) => {
        if(error) return console.error(error.message)

        if(resultado.length > 0) {
            res.json(resultado)
        } else {
            res.json(`No hay registros`)
        }
    })
})



// antecedentes

app.get('/antecedentes', (req, res) => {
    const query = `SELECT * FROM anteced_salud`
    conexion.query(query, (error, resultado) => {
        if(error) return console.error(error.message)

        if(resultado.length > 0) {
            res.json(resultado)
        } else {
            res.json(`No hay registros`)
        }
    })
})


// anuncios

app.get('/anuncios', (req,res) => {
    const query = `SELECT * FROM anuncios WHERE estado_anunc=1`
    conexion.query(query, (error, resultado) => {
        if(error) return console.error(error.message)

        if(resultado.length > 0) {
            res.json(resultado)
        } else {
            res.json(`No hay registros`)
        }
    })
})



// Administrador

app.get('/admin/usuarios/listado', (req, res) => {
    const query = `SELECT id_user, tipo_user, nom1_user, ape1_user, ape2_user, correo_sena_user, fk_anteced_salud_sel, anteced_salud_inp, estado_user
    FROM usuarios
    INNER JOIN tipos_usuarios
    ON fk_tipo_user=cod_tipo_user`
    conexion.query(query, (error, resultado) => {
        if(error) return console.error(error.message)

        if(resultado.length > 0) {
            res.json(resultado)
        } else {
            res.json(`No hay registros`)
        }
    })
})

app.get('/admin/usuarios/listado/:id_user', (req, res) => {
    const { id_user } = req.params

    const query = `SELECT id_user, fk_tipo_user, tipo_user, nom1_user, nom2_user, ape1_user, ape2_user, correo_sena_user, fk_anteced_salud_sel, anteced_salud_inp, estado_user
    FROM usuarios
    INNER JOIN tipos_usuarios
    ON fk_tipo_user = cod_tipo_user
    WHERE id_user=${id_user}`
    conexion.query(query, (error, resultado) => {
        if(error) return console.error(error.message)

        if(resultado.length > 0) {
            res.json(resultado)
        } else {
            res.json(`No hay registros`)
        }
    })
})

app.put('/admin/usuarios/edicion/:id_user', (req, res) => {
    const { id_user } = req.params
    let {
        fk_tipo_user,nom1_user,nom2_user,ape1_user,ape2_user,correo_sena_user,fk_anteced_salud_sel,anteced_salud_inp,estado_user
    } = req.body

    const query = `UPDATE usuarios SET fk_tipo_user=${fk_tipo_user}, nom1_user='${nom1_user}', nom2_user='${nom2_user}', ape1_user='${ape1_user}', ape2_user='${ape2_user}', correo_sena_user='${correo_sena_user}', fk_anteced_salud_sel='${fk_anteced_salud_sel}', anteced_salud_inp='${anteced_salud_inp}', estado_user=${estado_user} WHERE id_user=${id_user}`
    conexion.query(query, (error) => {
        if(error) return console.error(error.message)

        res.json(`Se actualizó correctamente el usuario`)
    })
})


// Registro

app.post('/home/regisrarse', (req, res) => {
    let {
        id_user,nom1_user,nom2_user,ape1_user,ape2_user,correo_sena_user,contrasena,fk_anteced_salud_sel,anteced_salud_inp
    } = req.body

    if (nom2_user=="" || nom2_user=="ninguno" || nom2_user=="no" || nom2_user=="no tengo"){
        nom2_user='';
    }
    if (ape2_user=="" || ape2_user=="ninguno" || ape2_user=="no" || ape2_user=="no tengo"){
        ape2_user='';
    }
    if (anteced_salud_inp=="" || anteced_salud_inp=="ninguno" || anteced_salud_inp=="ninguna" || anteced_salud_inp=="no" || anteced_salud_inp=="no tengo"){
        anteced_salud_inp='';
    }

    contrasena = md5(contrasena)

    const query = `INSERT INTO usuarios values(${id_user},2,'${nom1_user}','${nom2_user}','${ape1_user}','${ape2_user}','${correo_sena_user}','${contrasena}','${fk_anteced_salud_sel}','${anteced_salud_inp}',1)`
        conexion.query(query, (error) => {
            if(error) {
                // val = `http://localhost:9300/admin/usuarios/listado/${id_user}`
                // if (JSON.stringify(val)!=`No hay registros`){
                res.json('El número de documento ingresado ya se encuentra registrado en nuestro sistema. Por favor, inténtelo nuevamentente')
                    //return res.json('No se pudo agregar el registro')
                    //return console.error(error.message)
            }
            else {
                res.json(`Se agregó correctamente el usuario`)
            }
        })
    
})


// Login

app.post('/login', (req, res) => {
    let {
        correo_sena_user,contrasena
    } = req.body

    contrasena = md5(contrasena)

    const query = `SELECT * FROM usuarios WHERE correo_sena_user='${correo_sena_user}' AND contrasena='${contrasena}' AND estado_user=1`
        conexion.query(query, (error, resultado) => {
            if(error) {
                res.json('Error')
                // val = `http://localhost:9300/admin/usuarios/listado/${id_user}`
                // if (JSON.stringify(val)!=`No hay registros`){
                    //return res.json('No se pudo agregar el registro')
                    //return console.error(error.message)
                // }
            }
            else {
                if (resultado.length == 1) {
                    return res.json('Se encontró')
                }
                else {
                    return res.json('Correo o contraseña incorrecta')
                }
            }
        })
})

app.post('/get_rol', (req, res) => {
    let {
        correo_sena_user,contrasena
    } = req.body

    contrasena = md5(contrasena)

    const query = `SELECT fk_tipo_user FROM usuarios WHERE correo_sena_user='${correo_sena_user}' AND contrasena='${contrasena}' AND estado_user=1`
        conexion.query(query, (error, resultado) => {
            if(error) {
                return res.json('Error')
                // val = `http://localhost:9300/admin/usuarios/listado/${id_user}`
                // if (JSON.stringify(val)!=`No hay registros`){
                    //return res.json('No se pudo agregar el registro')
                    //return console.error(error.message)
                // }
            }
            else {
                if (resultado.length == 1) {
                    return res.json(resultado[0]['fk_tipo_user'])
                }
                else {
                    return res.json('No se encontró el rol del usuario')
                }
            }
        })
})


app.get('/musculos', (req, res) => {
    const query = `SELECT * FROM musculos`
    conexion.query(query, (error, resultado) => {
        if(error) return console.error(error.message)

        if(resultado.length > 0) {
            res.json(resultado)
        } else {
            res.json(`No hay registros`)
        }
    })
})


app.post('/planificador', (req,res) => {
    let {
        id_aprend,musculo
    } = req.body

    const query = `INSERT INTO planificador VALUES (NULL,1,'${musculo}')`
        conexion.query(query, (error) => {
            if(error) {
                res.json('Un error ocurrió. Por favor, inténtelo nuevamentente')
            }
            else {
                res.json(`Se agregó correctamente`)
            }
        })
})

app.get('/ejercicios_musculo/:musculo', (req, res) => {
    const { musculo } = req.params

    const query = `SELECT pkfk_musculo, pkfk_ejercicio, imagen_ejerc FROM musculos_ejercicios INNER JOIN ejercicios ON pkfk_ejercicio=ejercicio WHERE pkfk_musculo='${musculo}'`
    conexion.query(query, (error, resultado) => {
        if(error) return console.error(error.message)

        if(resultado.length > 0) {
            res.json(resultado)
        } else {
            res.json(`No hay registros`)
        }
    })
})




