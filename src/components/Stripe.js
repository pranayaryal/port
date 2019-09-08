import React from 'react';

const Stripe = () => {
    const reactScript = `<script src="https://js.stripe.com/v3/"></script>`;

    const injected = `
    import React from 'react';
    import { CardElement, injectStripe } from 'react-stripe-elements'

    const InjectedCardElement = props => {

        return (
            <div>
                <CardElement className="stripe-card" style={{base: {fontSize: '18px'}}}/>
                <button className="pay-with-stripe-button">Pay with credit card</button>
            </div>
        );
    }

    export default injectStripe(InjectedCardElement);
    `

    const cardComponent = `
    import React from 'react';
    import { StripeProvider, Elements, injectStripe, CardElement } from 'react-stripe-elements';
    import InjectedCardElement from './InjectedCardElement';

    const Card = () => {
        return (
                <div>
                    <br />
                        Test using this card:
                        <span className="cc-number">4242 4242 4242 4242</span>, and enter any 5 digits for the zip code

                        <StripeProvider apiKey="pk_test_j8asdfasdf8sdkjk2kjkjkj0">
                            <Elements>
                                <InjectedCardElement />
                            </Elements>
                        </StripeProvider>
                </div>


        );
    }

    export default Card;
    `
    const injectedModified = `
    import React from 'react';
    import { CardElement, injectStripe } from 'react-stripe-elements'

    const InjectedCardElement = props => {

        const handleSubmit = async(ev) => {
            //You automatically get the props
            let { token } = await props.stripe.createToken({ name: 'Name' });
            console.log(token)
        }

        return (
            <div>
                <CardElement className="stripe-card" style={{base: {fontSize: '18px'}}}/>
                <button className="pay-with-stripe-button">Pay with credit card</button>
            </div>
        );
    }

    export default injectStripe(InjectedCardElement);
    `
    return (
        <div className="content">
            <p>I am going to be using functional components with React Hooks</p>

            <p>1. Import Stripe.js into your index.html file and install react-stripe-elements</p>
            <div className="notification">
                <p className="is-size-7">{reactScript}</p>
                <p className="is-size-7">npm install --save react-stripe-elements</p>
            </div>
            <p>2. Create a component that will inject stripe like this. This will create a form with a button</p>
            <pre>
                <code>
                    {injected}
                </code>
            </pre>
            <p>3. Create the main file which will take the injected file like this after importing it. This is where you put your stripe publishable test key</p>
            <pre>
                <code>
                    {cardComponent}
                </code>
            </pre>
            <p>4. You can handle your stripe logic in InjectedCardElement.js component given above</p>
            <pre>
                <code>
                    {injectedModified}
                </code>
            </pre>

        </div>
    );
}

export default Stripe;
