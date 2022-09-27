// The submit button
const SUBMIT = $( "#submit" );

// Each of the fields and error message divs
const USERNAME = $( "#username" );
const USERNAME_MSG = $( "#user-msg" );

const PASSWORD = $( "#password" );
const PASSWORD_MSG = $( "#password-msg" );

const CONFIRM = $( "#confirm" );
const CONFIRM_MSG = $( "#confirm-msg" );

const FNAME = $( "#fname" );
const FNAME_MSG = $( "#fname-msg" );

const LNAME = $( "#lname" );
const LNAME_MSG = $( "#lname-msg" );

const EMAIL = $( "#email" );
const EMAIL_MSG = $( "#email-msg" );

/**
 * Resets the error message fields and makes the submit
 * button visible.
 */
function reset_form ( )
{
    USERNAME_MSG.html( "" );
    USERNAME_MSG.hide();
    PASSWORD_MSG.html( "" );
    PASSWORD_MSG.hide();
    CONFIRM_MSG.html( "" );
    CONFIRM_MSG.hide();
    LNAME_MSG.html( "" );
    LNAME_MSG.hide();
    FNAME_MSG.html( "" );
    FNAME_MSG.hide();
    EMAIL_MSG.html( "" );
    EMAIL_MSG.hide();
    SUBMIT.show();
}

/**
 * Validates the information in the register form so that
 * the server is not required to check this information.
 */
function validate ( )
{
    let valid = true;
    reset_form ( );


    // This currently checks to see if the username is
    // present and if it is at least 8 characters in length.
    if ( !USERNAME.val() || USERNAME.val().length < 8  )
    {
        // Show an invalid input message
        USERNAME_MSG.html( "Username deve contenere almeno 8 lettere o piu`" );
        USERNAME_MSG.show();
        // Indicate the type of bad input in the console.
        console.log( "Username non valido" );
        // Indicate that the form is invalid.
        valid = false;
    }
    // TODO: Add your additional checks here.


    if ( USERNAME.val() != USERNAME.val().toLowerCase())
    {
        USERNAME_MSG.html("Username deve contente solo lettere minuscole");
        USERNAME_MSG.show();
        valid = false;
    }

    if ( !PASSWORD.val() || PASSWORD.val().length < 5 )
    {
        PASSWORD_MSG.html("La password deve avere una lunghezza minima di 5 caratteri");
        PASSWORD_MSG.show();
        valid = false;
    }

    if ( !CONFIRM.val() || PASSWORD.val() != CONFIRM.val() )
    {
        CONFIRM_MSG.html("Le passwords non sono uguali");
        CONFIRM_MSG.show();
        valid = false;
    }

    if ( !FNAME.val() )
    {
        FNAME_MSG.html("Il nome non deve essere vuoto");
        FNAME_MSG.show();
        valid = false;
    }

    if ( !LNAME.val() )
    {
        LNAME_MSG.html("Il cognome non deve essere vuoto");
        LNAME_MSG.show();
        valid = false;
    }

    var x = EMAIL.val().trim();
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if ( atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length ) {
        EMAIL_MSG.html("Inserisci un email valida");
        EMAIL_MSG.show();
        valid = false;
    }

    // If the form is valid, reset error messages
    if ( valid )
    {
        reset_form ( );
    }
}

// Bind the validate function to the required events.
$(document).ready ( validate );
USERNAME.change ( validate );
PASSWORD.change ( validate );
CONFIRM.change ( validate );
LNAME.change ( validate );
FNAME.change ( validate );
EMAIL.change ( validate );


