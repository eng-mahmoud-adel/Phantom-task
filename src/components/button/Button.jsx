import Button from 'react-bootstrap/Button';

function BaseButton({text, style, rightIcon, leftIcon, onClick}) {
    return(
        <Button className={`btn`} style={style} onClick={onClick}>
            {leftIcon && leftIcon}
            {text}
            {rightIcon && rightIcon}
        </Button>
    )
}

export default BaseButton;