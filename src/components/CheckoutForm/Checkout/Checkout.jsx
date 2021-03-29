import React, {useState, useEffect} from 'react'
import {Paper,Stepper, Step, StepLabel, Typography, CircularProgress, Divider,Button} from "@material-ui/core"

import {commerce} from "/Users/conormurnane/Desktop/ecommerce_stripe/src/lib/commmerce.js"
import useStyles from "./styles"
import AddressForm from "./AddressForm"
import PaymentForm from "./PaymentForm"


const steps= ["Shipping address", "Payment details"]
function Checkout({cart}) {
    const classes = useStyles();
    const [checkoutToken, setCheckoutToken] = useState(null)
    const [activeStep,setActiveStep]=useState(0)

    useEffect(() => {
        const generateToken = async () => {
            try {
                const token = await commerce.checkout.generateToken(cart.id,{type: "cart"});
                console.log(token);

                setCheckoutToken(token)
            } catch (error) {

            }
        }

        generateToken()
    }, [cart])

    
    function Confirmation(){
        return(
        <div>
            Confirmation
        </div>)
    }

    function Form () {
        return(
            activeStep === 0
            ? <AddressForm checkoutToken = {checkoutToken}/>
            : <PaymentForm />
        )
    }
    return (
        <>
            <div className={classes.toolbar} />
            <main className= {classes.layout}>
                <Paper className = {classes.paper}>
                    <Typography variant="h4" align="center">Checkout</Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((step) => (
                            <Step key={step}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form/>}

                </Paper>
            </main>
        </>
    )
}

export default Checkout
