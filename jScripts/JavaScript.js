//מערכים לשמירת הנתונים של כפתורי הרדיו והצ'קבוקס
var boolsNum = [0];
var adding = [" ", " ", " "];

//פונקציה לתחילת המשחק
function game() {

    // כפתורים
    document.getElementById("play_again").style.display = "none";
    document.getElementById("sent_order").style.opacity = 0.5;

    //תמונות כפתורי רדיו
    document.getElementById("choclateball").style.display = "none";
    document.getElementById("strawbery").style.display = "none";
    document.getElementById("vanil").style.display = "none";

    //תמונות כפתורי צ'קבוקס
    document.getElementById("addChoclate").style.opacity = 0.5;
    document.getElementById("addsprinkles").style.opacity = 0.5;
    document.getElementById("addalmonds").style.opacity = 0.5;

    //איפוס סיכום הזמנה
    document.getElementById("result").innerHTML = " ";

    //איפוס כפתורי רדיו
    document.getElementById("option1").checked = false;
    document.getElementById("option2").checked = false;
    document.getElementById("option3").checked = false;

    //איפוס כפתורי צ'קבוקס
    document.getElementById("chocolate").checked = false;
    document.getElementById("sprinkles").checked = false;
    document.getElementById("almonds").checked = false;

    //איפוס תיבות טקסט
    document.getElementById("userName").value = "";
    document.getElementById("orderComments").value = "";

    // איפוס מערכים
    boolsNum = 0;
    adding = ["", "", ""];
}


//פונקציה תגובת כפתורי הרדיו 
function radioBTN() {
    //יצירת משתנה לכל כפתור
    var BTN1 = document.getElementById("option1");
    var BTN2 = document.getElementById("option2");
    var BTN3 = document.getElementById("option3");

    //בדיקת סימון הכפתור
    if (BTN1.checked == true) {

        //הגדרת התצוגה בהתאם
        document.getElementById("choclateball").style.display = "block";
        document.getElementById("strawbery").style.display = "none";
        document.getElementById("vanil").style.display = "none";

        //הגדרת המערך בהתאם
        boolsNum = 1;

    } else {
        if (BTN2.checked == true) {

            //הגדרת התצוגה בהתאם
            document.getElementById("choclateball").style.display = "block";
            document.getElementById("strawbery").style.display = "block";
            document.getElementById("vanil").style.display = "none";

            //הגדרת המערך
            boolsNum = 2;
        } else {
            if (BTN3.checked == true) {
                document.getElementById("choclateball").style.display = "block";
                document.getElementById("strawbery").style.display = "block";
                document.getElementById("vanil").style.display = "block";

                //הגדרת המערך
                boolsNum = 3;
            }
        }
    }
}

//פונקציה תגובת כפתור הצ'קבוקס הראשון
function adding1BTN() {
    //הגדרת הערכים כמשתנים
    var checkBoxCho = document.getElementById("chocolate");
    var text = document.getElementById("addChoclate");

    //בדיקת אישור האם הכפתור מסומן או לא
    if (checkBoxCho.checked == true) {
        text.style.opacity = 1;

        //הגדרת המערך במיקום הראשון - 0
        adding[0] = "שוקולד";

    } else {
        text.style.opacity = 0.5;

    }

}

//פונקציה תגובת כפתור הצ'קבוקס השני
function adding2BTN() {
    //הגדרת הערכים כמשתנים
    var checkBoxSpri = document.getElementById("sprinkles");
    var textSpri = document.getElementById("addsprinkles");

    //בדיקת אישור האם הכפתור מסומן או לא
    if (checkBoxSpri.checked == true) {
        textSpri.style.opacity = 1;

        //הגדרת המערך במיקום הראשון - 0
        adding[1] = "סוכריות צבעוניות";

    } else {
        textSpri.style.opacity = 0.5;
    }


}


//פונקציה תגובת כפתור הצ'קבוקס השלישי
function adding3BTN() {
    //הגדרת הערכים כמשתנים
    var checkBoxCookie = document.getElementById("almonds");
    var textCooki = document.getElementById("addalmonds");

    //בדיקת אישור האם הכפתור מסומן או לא
    if (checkBoxCookie.checked == true) {
        textCooki.style.opacity = 1;

        //הגדרת המערך במיקום הראשון - 0
        adding[2] = "אגוזים";

    } else {
        textCooki.style.opacity = 0.5;

    }

}

//פונקציה לצורך הדפסת סיכום ההזמנה
function orderSummery() {
    //שמירת הערכים של תיבות הטקסט כמשתנים
    var rename = changeName() ;
    var comments = document.getElementById("orderComments").value;

    //בדיקת התנאי להפעלת הכפתור
    if (rename.length > 0) {
    //הדפסת סיכום ההזמנה
    document.getElementById("result").innerHTML = "סיכום הזמנתך: " + "<br/>" + "שם המזמין: " + rename + "<br/>" + "מספר כדורים: " + boolsNum.toString() + "<br/>" + "תוספות לצד הגלידה: " + adding[0] + " " + adding[1] + " " + adding[2] + "<br/>" + "הערות: " + comments;

    //הצגת הכפתור המאפשר משחק חדש
        document.getElementById("play_again").style.display = "block";
    }
}


//פונקציה לצורך קליטת השינויים של תיבת הטקסט של שם המזמין
function changeName() {

    //שמירת ערך מתיבת הטקסט
    var name = document.getElementById("userName").value;


    //בדיקה לצורך העיצוב של כפתור "שלח הזמנה
    if ((boolsNum != 0) && ((adding[0].length > 0) || (adding[1].length > 0) || (adding[2].length > 0)) && (name.length > 0)) {
        document.getElementById("sent_order").style.opacity = 1;
    } else {
        document.getElementById("sent_order").style.opacity = 0.5;
    }

    return(name);
}
