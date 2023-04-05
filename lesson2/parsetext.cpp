#include "parsetext.h"

//ParseText::ParseText()
//{
//   text = "";
//   preText = "";
//   pos = 0;
//}

ParseText::ParseText(QString txt)
{
   if (txt == "RUB" || txt == "руб") preText = "₽";
   else if (txt == "CPR" || txt == "копирайт") preText = "©";
   else if (txt == "EUR" || txt == "евро") preText = "€";
   else if (txt == "PRM" || txt == "промилле") preText = "‰";
   else preText = txt;
}


QString ParseText::getText()
{
    text = preText;
    return text;
}
