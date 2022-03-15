export default {
    render() {
        return `${this.css()}
        ${this.html()}`;
    },
    html() {
        return `<header>
                    <h3 class="heading-title">404 NOT FOUND</h3>
                </header>
                <main>
                   
                     <img src='../Scarecrow.png'class="img" alt="scarecrow-photo"/>
                   
                <aside>
                        <h1 class="title">I have bad news for you</h1>
                        <p>The page you are looking for might be removed or is temporarily unavailable.</p>
                        <a herf="#"><button>BACK TO HOMEPAGE</button></a>
                </aside>

                </main>
        `;
    },
    css() {
        return `
        <style>
       
      .heading-title{
          font-family: 'poppins','sans-serif';
      }
        h3{
            color:#333333; display:flex;
            max-width:1440px;
            width:85%;
            margin:2em auto;
        }
        main{
            display:flex;
            max-width:1440px;
            width:85%;
            margin:4em auto;
        }
        .img{
            padding-top:4em;
            width:40%;
            height:100%;
            margin-right:4em;
        }
        .title{ 
            font-size:3rem;
            width:80%;
           font-family: 'Space Mono', monospace;
           font-weight:700;
        }
        aside p{
            width:50%;font-family: 'Space Mono', monospace;
            font-weight:400;
            color:#4f4f4f;
            padding-bottom:2em;
        }
        button{
            padding:1em 2em;
            background:#333333;
            outline:none;
            border:none;
            cursor:pointer;
            color:#ffffff;
            font-family: 'Space Mono', monospace;
        }
        @media(max-width:767px){
            h3{
                margin:1em auto;
            }
            main{
                flex-direction:column;
            }
            .img{
                padding-top:0em;
                width:100%;
                margin-right:0;
            }
            .title{
                font-size:2.1rem;
                width:100%;
            }
            aside p{
                width:100%;
            }
        }
        </style>`
    }
}