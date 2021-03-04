var input1, input2;
input1 = prompt("Month 1-12")
input2 = prompt("Start Day 1-7")
function Calendar(element, month, day) {
    const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    
    let mname = ''
    if (month == 1)
        mname = 'JANUARY'
    else if (month == 2)
        mname = 'FEBRUARY'
    else if (month == 3)
        mname = 'MARCH'
    else if (month == 4)
        mname = 'APRIL'
    else if (month == 5)
        mname = 'MAY'
    else if (month == 6)
        mname = 'JUNE'
    else if (month == 7)
        mname = 'JULY'
    else if (month == 8)
        mname = 'AUGUST'
    else if (month == 9)
        mname = 'SEPTEMBER'
    else if (month == 10)
        mname = 'OCTOBER'
    else if (month == 11)
        mname = 'NOVEMBER'
    else if (month == 12)
        mname = 'DECEMBER'
    else {
        mname = "Invalid Input"
    }
    let Creater = `<table><tr><td colspan = "7" align = "center" id="month" font-style = "italic">${mname}</tr></td><tr><th>SUN</th><th>MON</th><th>TUE</th><th>WED</th><th>THU</th><th>FRI</th><th>SAT</th></tr>`
    let WeekC = 0
    let CDays = 1
    let Adder = 1
if(month > 12 || day > 7){
    element.innerHTML = ("<h1>Invalid Input</h1>")
}else if(month == 0 || day == 0)
    element.innerHTML = ("<h1>Invalid Input</h1>")
    else{
        if(days[month-1] == 31){
            if(day >= 6){
                for (let i = 0; i < 42; i++) {
                    if (WeekC == 0) {
                        Creater += '<tr>'
                    }
                    if (Adder <= day - 1) {
                        Creater += "<td></td>"
                        Adder++
                    }
                    else if (CDays > days[month - 1])
                        Creater += "<td></td>"
                    else {
                        if (CDays <= days[month - 1]) {
                            Creater += `<td>${CDays}</td>`
                            CDays++
                        }
                        else
                            Creater += "<td></td>"
                    }
                    if (WeekC == 6) {
                        Creater += '</tr>'
                        WeekC = 0
                    }
                    else {
                        WeekC++
                    }
                }
            }
            else{
                for (let i = 0; i < 35; i++) {
                    if (WeekC == 0) {
                        Creater += '<tr>'
                    }
            
                    if (Adder <= day - 1) {
                        Creater += "<td></td>"
                        Adder++
                    }
                    else if (CDays > days[month - 1])
                        Creater += "<td></td>"
                    else {
                        if (CDays <= days[month - 1]) {
                            Creater += `<td>${CDays}</td>`
                            CDays++
                        }
                        else
                            Creater += "<td></td>"
                    }
                    if (WeekC == 6) {
                        Creater += '</tr>'
                        WeekC = 0
                    }
                    else {
                        WeekC++
                    }
                }
            }   
        }else if(days[month-1] == 28){
            if(day >= 6){
            for (let i = 0; i < 35; i++) {
                if (WeekC == 0) {
                    Creater += '<tr>'
                }
                if (adder <= day - 1) {
                    Creater += "<td></td>"
                    Adder++
                }
                else if (CDays > days[month - 1])
                    Creater += "<td></td>"
                else {
                    if (CDays <= days[month - 1]) {
                        Creater += `<td>${CDays}</td>`
                        CDays++
                    }
                    else
                        Creater += "<td></td>"
                }
                if (WeekC == 6) {
                    Creater += '</tr>'
                    WeekC = 0
                }
                else {
                    WeekC++
                }
            }
        }else{
            for (let i = 0; i < 28; i++) {
                if (WeekC == 0) {
                    Creater += '<tr>'
                }
                if (Adder <= day - 1) {
                    Creater += "<td></td>"
                    Adder++
                }
                else if (CDays > days[month - 1])
                    Creater += "<td></td>"
                else {
                    if (CDays <= days[month - 1]) {
                        Creater += `<td>${CDays}</td>`
                        CDays++
                    }
                    else
                        Creater += "<td></td>"
                }
                if (WeekC == 6) {
                    Creater += '</tr>'
                    WeekC = 0
                }
                else {
                    WeekC++
                }
            }
        }
        }else{
            if(day >= 6){
                for (let i = 0; i < 35; i++) {
                    if (WeekC == 0) {
                        Creater += '<tr>'
                    }
                    if (Adder <= day - 1) {
                        Creater += "<td></td>"
                        Adder++
                    }
                    else if (CDays > days[month - 1])
                        Creater += "<td></td>"
                    else {
                        if (CDays <= days[month - 1]) {
                            Creater += `<td>${CDays}</td>`
                            CDays++
                        }
                        else
                            Creater += "<td></td>"
                    }
                    if (WeekC == 6) {
                        Creater += '</tr>'
                        WeekC = 0
                    }
                    else {
                        WeekC++
                    }
                }
            }else{
                for (let i = 0; i < 35; i++) {
                    if (WeekC == 0) {
                        Creater += '<tr>'
                    }
                    if (Adder <= day - 1) {
                        Creater += "<td></td>"
                        Adder++
                    }
                    else if (CDays > days[month - 1])
                        Creater += "<td></td>"
                    else {
                        if (CDays <= days[month - 1]) {
                            Creater += `<td>${CDays}</td>`
                            CDays++
                        }
                        else
                            Creater += "<td></td>"
                    }
            
                    if (WeekC == 6) {
                        Creater += '</tr>'
                        WeekC = 0
                    }
                    else {
                        WeekC++
                    }
                }
            }
        }
        Creater += '</table>'
        element.innerHTML = Creater;
        }
    }
Calendar(Head, input1, input2)
