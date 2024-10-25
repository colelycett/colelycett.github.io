function mod(a, b) {
    if (a >= 0) {
        return a % b;
    }
    else {
        return b + a;
    }
}
function cleanForDisplay(text) {
    result = "";
    for (let i = 0; i < text.length; i++) {
        if (text[i] == "&")
            result+="&amp;";
        else if (text[i] == "<")
            result+="&lt;";
        else if (text[i] == ">")
            result+="&gt;";
        else if (text[i] == "\"")
            result+="&quot;";
        else if (text[i] == "\'")
            result+="&apos;"
        else
            result+=text[i];
    }

    return result;
}

function columnarTranspose(numText) {
    if (numText.length % 3 != 0) {
        return "Error";
    }
    let r = "";
    for (let i = 0; i<numText.length; i+=3) {
        r += numText[i];
    }
    for (let i = 1; i<numText.length; i+=3) {
        r += numText[i];
    }
    for (let i = 2; i<numText.length; i+=3) {
        r += numText[i];
    }
    return r;
}
function invColumnarTranspose(numText) {

    if (numText.length % 3 != 0) {
        return "Error";
    }
    let r = "";
    for (let j = 0; j<numText.length/3; j++) {
        for (let i = j; i<numText.length; i+=numText.length/3) {
            r += numText[i];
        }
    }
    return r;
}

function encipher(m) {
    
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~` 1234567890!@#$%^&*()_+-={}[]|\\:;\"\'<,>.?/\t\n";
    //String alphabet = "KRYPTOSABCDEFGHIJLMNQUVWXZ";
    let keyword = document.getElementById("key").value;
    let plaintext = document.getElementById("plaintext").value;
    let ciphertext = "";
    let numSkips = 0;

    //This preserves the spacing in an alphabet that does not consider spaces to be a character.
    /*
    for (int i = 0; i < plaintext.length; i++) {
        if (plaintext[i] == ' ') {
            ciphertext += " ";
            numSkips++;
        }
        else if (alphabet.indexOf(plaintext[i]) == -1) {
            ciphertext += plaintext[i];
            numSkips++;
        }
        else {
            ciphertext += alphabet.charAt(mod(alphabet.indexOf(plaintext[i]) + m * alphabet.indexOf(keyword.charAt(mod(i - numSkips,keyword.length))), alphabet.length));
        }
    }*/

    //This includes spaces as a character.
    switch (m) {
        case 1:
            while (plaintext.length % 3 != 0) {
                plaintext += "X";
            }
            for (let i = 0; i<plaintext.length; i++) {
                ciphertext += alphabet[mod(alphabet.indexOf(plaintext[i]) + m * alphabet.indexOf(keyword[mod(i - numSkips,keyword.length)]), alphabet.length)];
            }
            ciphertext = columnarTranspose(ciphertext);
        break;
        case -1:
            while (plaintext.length % 3 != 0) {
                plaintext += "X";
            }
            plaintext = invColumnarTranspose(plaintext);
            for (let i = 0; i<plaintext.length; i++) {
                ciphertext += alphabet[mod(alphabet.indexOf(plaintext[i]) + m * alphabet.indexOf(keyword[mod(i - numSkips,keyword.length)]), alphabet.length)];
            }
        break;
    }
    if (m == 1) {
        let location = Math.floor(Math.random()*ciphertext.length);
        let blockade_sequence = "";
        while (ciphertext.includes(blockade_sequence) || blockade_sequence.length<3) {
            blockade_sequence = "";
            while (blockade_sequence.length < 3) {
                blockade_sequence += alphabet[Math.floor(Math.random()*alphabet.length)];
            }
        }
        ciphertext = blockade_sequence + ciphertext.substring(0, location) + blockade_sequence + ciphertext.substring(location);
        //alert(blockade_sequence);
    }

    let t = ciphertext;
    ciphertext = plaintext;
    plaintext = t;
    //alert(plaintext.length);
    //alert(ciphertext.length);

    //And again
    numSkips = 0;
    ciphertext = "";
    switch (m) {
        case 1:
            while (plaintext.length % 3 != 0) {
                plaintext += "X";
            }
            for (let i = 0; i<plaintext.length; i++) {
                ciphertext += alphabet[mod(alphabet.indexOf(plaintext[i]) + m * alphabet.indexOf(keyword[mod(i - numSkips,keyword.length)]), alphabet.length)];
            }
            ciphertext = columnarTranspose(ciphertext);
        break;
        case -1:
            let seq = plaintext.substring(0,3);
            plaintext = plaintext.substring(3);
            plaintext = plaintext.substring(0,plaintext.indexOf(seq))+plaintext.substring(plaintext.indexOf(seq)+3);
            while (plaintext.length % 3 != 0) {
                plaintext += "X";
            }
            plaintext = invColumnarTranspose(plaintext);
            for (let i = 0; i<plaintext.length; i++) {
                ciphertext += alphabet[mod(alphabet.indexOf(plaintext[i]) + m * alphabet.indexOf(keyword[mod(i - numSkips,keyword.length)]), alphabet.length)];
            }
        break;
    }
    //alert(ciphertext.length);
    ciphertext = cleanForDisplay(ciphertext);

    document.getElementById("ciphertext").innerHTML = ciphertext;
}
