import React,{ Component } from 'react';

// const Header = ( ) => {
//     return(
//         <div>
//             <center>
//                 <h1>React App</h1>
//             </center>
//             <hr/>
//         </div>
//     )
// }

class Header extends Component {
    render() {

        const mystyle = {
            header:{
                background:'teal'
            },
            logo: {
                color:'white',
                fontSize: '30px',
                textAlign:'center'
            }
        }
        return(
            <header style={mystyle.header}>
                <div style={mystyle.logo}>Logo</div>
                <center>
                    <input/>
                </center>
            </header>
        )
    }
}

export default Header;