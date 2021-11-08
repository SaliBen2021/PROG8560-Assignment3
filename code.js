/* Web Application For a Self-Order Kiosk
   Assignment 1
   
   
   Revision history
       Sali Ben Suleiman, 2021.06.10: Created 

*/
/************************************************************************************/
/*Define global variables for each item price, the number of ordered pieces, client name, 
   total price and Enable button function */

var Item1_price = 0;
var Item2_price = 0;
var Item3_price = 0;
var Item4_price = 0;
var Item5_price = 0;

NumberOfPieces1 = 0;
NumberOfPieces2 = 0;
NumberOfPieces3 = 0;
NumberOfPieces4 = 0;
NumberOfPieces5 = 0;

var total;
var ClientName;
var Enable_CheckOut = 0;
/*************************************************************************************************************/

/* Create Add to cart function for each item and validate the input */
function AddToCart1() 
{
    NumberOfPieces1 = prompt('How many pieces?');

    while (true) 
    {
        NumberOfPieces1 = NumberOfPieces1.trim();

        if (isNaN(NumberOfPieces1) == false && NumberOfPieces1 != '' && NumberOfPieces1 != null && NumberOfPieces1 != 0) 
        {
            //show the quantity in the cart before CheckOut
            var position = document.getElementById("ProductList").getElementsByTagName("TD");
            position[3].innerHTML = NumberOfPieces1;

            Item1_price = parseFloat(NumberOfPieces1 * 10);

            Enable_Button();
            break;
        }
        else
            NumberOfPieces1 = prompt('Please enter a numeric value!');
    }

}

function AddToCart2() 
{
    NumberOfPieces2 = prompt('How many pieces?');
    while (true) 
    {
        NumberOfPieces2 = NumberOfPieces2.trim();

        if (isNaN(NumberOfPieces2) == false && NumberOfPieces2 != '' && NumberOfPieces2 != null && NumberOfPieces2 != 0)
         {
            //show the quantity in the cart before CheckOut
            var position = document.getElementById("ProductList").getElementsByTagName("TD");
            position[7].innerHTML = NumberOfPieces2;

            Item2_price = parseFloat(NumberOfPieces2 * 20);

            Enable_Button();
            break;
        }
        else
            NumberOfPieces2 = prompt('Please enter a numeric value!');
    }
}

function AddToCart3() 
{
    NumberOfPieces3 = prompt('How many pieces?');
    while (true) 
    {
        NumberOfPieces3 = NumberOfPieces3.trim();
        if (isNaN(NumberOfPieces3) == false && NumberOfPieces3 != '' && NumberOfPieces3 != null && NumberOfPieces3 != 0) 
        {
            //show the quantity in the cart before CheckOut
            var position = document.getElementById("ProductList").getElementsByTagName("TD");
            position[11].innerHTML = NumberOfPieces3;

            Item3_price = parseFloat(NumberOfPieces3 * 30);

            Enable_Button();
            break;
        }
        else

            NumberOfPieces3 = prompt('Please enter a numeric value!');
    }
}


function AddToCart4() 
{
    NumberOfPieces4 = prompt('How many pieces?');
    while (true) 
    {
        NumberOfPieces4 = NumberOfPieces4.trim();

        if (isNaN(NumberOfPieces4) == false && NumberOfPieces4 != '' && NumberOfPieces4 != null && NumberOfPieces4 != 0)
         {
            //show the quantity in the cart before CheckOut
            var position = document.getElementById("ProductList").getElementsByTagName("TD");
            position[15].innerHTML = NumberOfPieces4;

            Item4_price = parseFloat(NumberOfPieces4 * 40);

            Enable_Button();
            break;
        }
        else
            NumberOfPieces4 = prompt('Please enter a numeric value!');
    }
}

function AddToCart5() 
{
    NumberOfPieces5 = prompt('How many pieces?');
    //validate
    while (true) 
    {
        NumberOfPieces5 = NumberOfPieces5.trim();// remove any spaces at the front or the end
        if (isNaN(NumberOfPieces5) == false && NumberOfPieces5 != '' && NumberOfPieces5 != null && NumberOfPieces5 != 0) 
        { 
            //show the quantity in the cart before CheckOut
            var position = document.getElementById("ProductList").getElementsByTagName("TD");
            position[19].innerHTML = NumberOfPieces5;

            Item5_price = parseFloat(NumberOfPieces5 * 50);

            Enable_Button();
            break;
        }
        else
            NumberOfPieces5 = prompt('Please enter a numeric value!');
    }
}
/*************************************************************************************************************/

/*CheckOut function will perform the follwoing:
1- Check if the quanity  >0
    if true:
        a- validate the input name.
        b- insert a row in the receipt table
        c- fill the table with corresponding information 
        d- enable the CheckOut button
        e- calculate the total
        f- adding rows for the subtotal, final total, client name and GST tax
    else
        the CheckOut button remains disabled
*/

function CheckOut() 
{
    checkName();//validate the input name

    NumberOfPieces1 = parseInt(NumberOfPieces1);
    var NumberOfRows = 0;
    if (NumberOfPieces1 > 0) 
    {
        // insert rows in the table
        NumberOfRows++;
        var row = ReceiptTable.insertRow(NumberOfRows);
        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);

        // fill the table with product detailes 
        cell0.innerHTML = "Mascara";
        cell1.innerHTML = NumberOfPieces1;
        cell2.innerHTML = 10;
        cell3.innerHTML = NumberOfPieces1 * 10;

    }

    if (NumberOfPieces2 > 0)
     {
        // insert rows in the table
        NumberOfRows++;
        var row = ReceiptTable.insertRow(NumberOfRows);
        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);

        // fill the table with product detailes 
        cell0.innerHTML = "Lotion";
        cell1.innerHTML = NumberOfPieces2;
        cell2.innerHTML = 20;
        cell3.innerHTML = NumberOfPieces2 * 20;

    }


    if (NumberOfPieces3 > 0) 
    {
        // insert rows in the table
        NumberOfRows++;
        var row = ReceiptTable.insertRow(NumberOfRows);
        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);

        // fill the table with product detailes 
        cell0.innerHTML = "Sun Screen";
        cell1.innerHTML = NumberOfPieces3;
        cell2.innerHTML = 30;
        cell3.innerHTML = NumberOfPieces3 * 30;

    }

    if (NumberOfPieces4 > 0) 
    {
        // insert rows in the table
        NumberOfRows++;
        var row = ReceiptTable.insertRow(NumberOfRows);
        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);

        // fill the table with product detailes 
        cell0.innerHTML = "Powder";
        cell1.innerHTML = NumberOfPieces4;
        cell2.innerHTML = 40;
        cell3.innerHTML = NumberOfPieces4 * 40;

    }

    if (NumberOfPieces5 > 0) 
    {
        // insert rows in the table
        NumberOfRows++;
        var row = ReceiptTable.insertRow(NumberOfRows);
        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);

        // fill the table with product detailes 
        cell0.innerHTML = "Blush";
        cell1.innerHTML = NumberOfPieces5;
        cell2.innerHTML = 50;
        cell3.innerHTML = NumberOfPieces5 * 50;

    }

    //calculate the total without tax
    total = Item1_price + Item2_price + Item3_price + Item4_price + Item5_price;


    //adding row for the sub total and the final total
    NumberOfRows++;
    var table = document.getElementById("ReceiptTable");
    var row = ReceiptTable.insertRow(NumberOfRows);
    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);
    cell2.innerHTML = "Sub-total";
    cell3.innerHTML = total;

    //adding row for the 13% taxes
    NumberOfRows++;
    var table = document.getElementById("ReceiptTable");
    var row = ReceiptTable.insertRow(NumberOfRows);
    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);
    cell2.innerHTML = "13% taxes";
    cell3.innerHTML = (0.13 * total).toFixed(2);

    //adding row for the name and the final total
    NumberOfRows++;
    var table = document.getElementById("ReceiptTable");
    var row = ReceiptTable.insertRow(NumberOfRows);
    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);
    cell0.innerHTML = "Client's Name";
    cell1.innerHTML = ClientName;
    cell2.innerHTML = "Final Total";
    cell3.innerHTML = (0.13 * total + total).toFixed(2);

}

/*************************************************************************************************************/ 

function checkName() 
{

    ClientName = prompt('Please enter your name');
    while (true) 
    {
        if (isNaN(ClientName) && ClientName != '' && ClientName != null) {
            break;
        }
        else
            ClientName = prompt('Please enter your name');
    }


}

function Enable_Button() 
{
    if (Enable_CheckOut == 0) 
    {
        Enable_CheckOut = 1;
        document.getElementById('CheckOut').removeAttribute('disabled');
    }
}