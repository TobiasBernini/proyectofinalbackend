const { check } = require('express-validator')

const checks = [
    check('exclusivo')
        .notEmpty().withMessage('el campo exclusivo es requerido')
        .isString().withMessage('el campo exclusivo tiene que ser de tipo string'),
    check('plataforma')
        .notEmpty().withMessage('el campo plataforma es requerido')
        .isString().withMessage('el campo plataforma tiene que ser de tipo string'),
    check('precio')
        .notEmpty().withMessage('el campo precio es requerido')
        .isNumeric().withMessage('el campo precio tiene que ser de tipo number'),
    check('nombre')
        .notEmpty().withMessage('el campo nombre es requerido')
        .isString().withMessage('el campo nombre tiene que ser de tipo string'),
    check('clasificacion')
        .notEmpty().withMessage('el campo clasificacion es requerido')
        .isString().withMessage('el campo clasificacion tiene que ser de tipo string'),
    check('empresa')
        .notEmpty().withMessage('el campo empresa es requerido')
        .isString().withMessage('el campo empresa tiene que ser de tipo string'),
    check('genero')
        .notEmpty().withMessage('el campo genero es requerido')
        .isString().withMessage('el campo genero tiene que ser de tipo string'),
    check('fechaLanzamiento')
        .notEmpty().withMessage('el campo fechaLanzamiento es requerido')
        .isNumeric().withMessage('el campo fechaLanzamiento tiene que ser de tipo number'),
    check('distribuidor')
        .notEmpty().withMessage('el campo distribuidor es requerido')
        .isString().withMessage('el campo distribuidor tiene que ser de tipo string'),
]

module.exports = checks