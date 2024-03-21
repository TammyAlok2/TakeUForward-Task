import express, { Router } from 'express'
import { submitCode, showUser } from '../Controllers/Application.Controller.js'

const router = Router()

router.route('/showUser').get(showUser)

router.route('/submit').post(submitCode)

export default router