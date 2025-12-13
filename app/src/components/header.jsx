function Header(props)
{
    return (

        <div data-testid="pageTitle" class="Header">
            {props.title}
        </div>
        
    );
}

export default Header;