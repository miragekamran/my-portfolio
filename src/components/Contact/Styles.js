import styled from 'styled-components';

export const Styles = styled.div`
    h1 {
        text-align: center;
        color: #777;
    }

    form {
        display: flex;
        flex-direction: column;
        width: 25%;
        margin: 100px auto;

        lable {
            margin-top: 20px;
        }

        input,
        select {
            fornt-size: 1.2em;
        }

        .error {
            color: red;
            font-size: .6em;
        }
    }

    button {
        background: #1997BF;
        padding: 10px;
        color: white;
        margin-top: 20px;
        border-radius: 5px;
        fornt-size: 1.2em;
    }
`