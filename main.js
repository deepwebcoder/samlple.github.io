class MyHeader extends HTMLElement {
    isConnectedcallback()   {
    this.innerHTML=
    <header>

        <a href="index.html"></a>
        <nav>
            <ul>
<li><a href="index.html">home</a></li>
<li><a href="header.html">Header</a>         </li>
<li><a href="footer.html">footer</a>          </li>

            </ul>
            </nav> 
    
    </header>
    }
    }
   
   
    customElements.define('my-header', MyHeader)
    
    
    
    class MyFooter extends HTMLElement {
        isConnectedcallback(){
        this.innerHTML=
        <footer>
   copy write @2002
        
        </footer>
        }
        }
        customElements.define('my-footer', MyFooter)