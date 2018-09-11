var userSalary = 12000;
$('#salary-display').text(userSalary);

$.get("/api/stats", function (response) {
    console.log(response[0])
    for (var i = 0; i < response.length; i++) {
        var ThreePCT = (response[i].threePM / response[i].threePA).toFixed(3);
        var FTpct = (response[i].ftm / response[i].fta).toFixed(3);
        if (response[i].gamesPlayed > 58) {
            var posSelect = $('<select class="position-selector">');
            if (response[i].position === "C") {
                posSelect.append("<option value='C'>C</option>")
            } else if (response[i].position === "F-C" || response[i].position === "C-F") {
                posSelect.append(
                    "<option value='C'>C</option>" +
                    "<option value='PF'>PF</option>"
                )
            } else if (response[i].position === "F") {
                posSelect.append(
                    "<option value='SF'>SF</option>" +
                    "<option value='PF'>PF</option>"
                )
            } else if (response[i].position === "G-F" || response[i].position === "F-G") {
                posSelect.append(
                    "<option value='PF'>PF</option>" +
                    "<option value='SF'>SF</option>" +
                    "<option value='SG'>SG</option>"
                )
            } else if (response[i].position === "G") {
                posSelect.append(
                    "<option value='PG'>PG</option>" +
                    "<option value='SG'>SG</option>" +
                    "<option value='SF'>SF</option>"
                )
            }

            var salary = parseInt(((parseFloat(response[i].per) + parseFloat(response[i].usgPCT)) / 2) * 100)
            var statsDiv = $('<div class="hidden stat-display" id="stats' + i + '">');
            statsDiv.html(
                "<h3 class='stat-div-heading'>"+response[i].playerName+"</h3>"+
                "<h4>"+response[i].year+"</h4>"+
                "<h3>Per Game Averages:</h3>"+
                "<h4>Points: "+ (parseInt(response[i].pts)/response[i].gamesPlayed).toFixed(2)+"</h4>"+
                "<h4>Rebounds: "+ (parseInt(response[i].reb)/response[i].gamesPlayed).toFixed(2)+"</h4>"+
                "<h4>Assists: "+ (parseInt(response[i].ast)/response[i].gamesPlayed).toFixed(2)+"</h4>"+
                "<h4>Steals: "+ (parseInt(response[i].stl)/response[i].gamesPlayed).toFixed(2)+"</h4>"+
                "<h4>Blocks: "+ (parseInt(response[i].blk)/response[i].gamesPlayed).toFixed(2)+"</h4>"
            );
            $('#stat-holder').append(statsDiv);

            $('#available-players').append(
                $("<tr>").append(
                    $('<td>').text(response[i].position),
                    $('<td>').text(response[i].playerName),
                    $('<td>').text("$" + parseInt(salary)),
                    $('<td>').html(posSelect),
                    $('<td>').html('<button class="add-player" value="'+response[i].playerName+salary+'">+</button>'),
                    // statsDiv
                ).val(response[i].position).attr('data', i).attr('salary' , salary)
                .attr('name' , response[i].playerName)
                .attr('TSpct' , response[i].tsPCT)
                .attr('ThreePAr' , response[i].threePAR)
                .attr('ThreePCT' , ThreePCT)
                .attr('FTr' , response[i].ftR)
                .attr('FTpct' , FTpct)
                .attr('ORBpct' , response[i].orbPCT)
                .attr('DRBpct' , response[i].drbPCT)
                .attr('ASTpct' , response[i].astPCT)
                .attr('STLpct' , response[i].stlPCT)
                .attr('BLKpct' , response[i].blkPCT)
                .attr('TOVpct' , response[i].tovPCT)
                .attr('USGpct' , response[i].usgPCT)
                .addClass('available-player-row')
                .hover(
                    function (){
                        var rowRefNumb = $(this).attr('data');
                        $('#select-instructions').addClass('hidden');
                        $('#stats'+rowRefNumb).removeClass('hidden')
                    } ,
                    function (){
                        var rowRefNumb = $(this).attr('data');
                        $('#stats'+rowRefNumb).addClass('hidden');
                        $('#select-instructions').removeClass('hidden');
                    }
                )
            )
        }
    }

    // add player button
    $('.add-player').on('click', function () {
        var playerSalaryCheck = parseInt($(this).parents('tr').attr('salary'))
        var buttonValue = $(this).val();
        if (buttonValue === $('#C-row').attr("validCheck") || buttonValue === $('#PG-row').attr("validCheck") || buttonValue === $('#SG-row').attr("validCheck") || buttonValue === $('#PF-row').attr("validCheck") || buttonValue === $('#SF-row').attr("validCheck")) {
            alert("cannot use same player twice");
        } else if ((userSalary - playerSalaryCheck) < 0) {
            alert("cannot afford this player with current salary")
        } else {
            userSalary -= playerSalaryCheck;
            $('#salary-display').text(userSalary);

            var selPlayerPos = $(this).parents('tr').find('select').val();
            console.log(selPlayerPos)
            var selPlayerSal = $(this).parents('tr').attr('salary');
            var selPlayerName = $(this).parents('tr').attr('name');
            var TSpct = $(this).parents('tr').attr('TSpct')
            var ThreePAr = $(this).parents('tr').attr('ThreePAr')
            var ThreePCT = $(this).parents('tr').attr('ThreePCT')
            var FTr = $(this).parents('tr').attr('FTr')
            var FTpct = $(this).parents('tr').attr('FTpct')
            var ORBpct = $(this).parents('tr').attr('ORBpct')
            var DRBpct = $(this).parents('tr').attr('DRBpct')
            var ASTpct = $(this).parents('tr').attr('ASTpct')
            var STLpct = $(this).parents('tr').attr('STLpct')
            var BLKpct = $(this).parents('tr').attr('BLKpct')
            var TOVpct = $(this).parents('tr').attr('TOVpct')
            var USGpct = $(this).parents('tr').attr('USGpct')

            var rowFunctionality = function (row) {
                if (($(row).attr("validCheck")) != "") {
                    userSalary += parseInt($(row).attr("salary"))
                    $('#salary-display').text(userSalary);
                }
                $(row).attr("validCheck", selPlayerName + selPlayerSal).html('').append(
                    $('<th>').text(selPlayerPos),
                    $('<td>').text(selPlayerName),
                    $('<td>').text(selPlayerSal),
                    $('<td>').html("<td><button class='drop-player'>--</button></td>")
                ).attr('salary' , selPlayerSal)
                .attr('name' , selPlayerName)
                .attr('TSpct' , TSpct)
                .attr('ThreePAr' , ThreePAr)
                .attr('ThreePCT' , ThreePCT)
                .attr('FTr' , FTr)
                .attr('FTpct' , FTpct)
                .attr('ORBpct' , ORBpct)
                .attr('DRBpct' , DRBpct)
                .attr('ASTpct' , ASTpct)
                .attr('STLpct' , STLpct)
                .attr('BLKpct' , BLKpct)
                .attr('TOVpct' , TOVpct)
                .attr('USGpct' , USGpct)
                .find("button").on('click' , function(){
                    var rowSalary = parseInt($(this).parents('tr').attr("salary"))
                    userSalary += rowSalary;
                    $('#salary-display').text(userSalary);
                    $(this).parents('tr')
                    .attr("salary", "")
                    .attr("validCheck", '')
                    .attr('name' , '')
                    .attr('TSpct' , '')
                    .attr('ThreePAr' , '')
                    .attr('ThreePCT' , '')
                    .attr('FTr' , '')
                    .attr('FTpct' , '')
                    .attr('ORBpct' , '')
                    .attr('DRBpct' , '')
                    .attr('ASTpct' , '')
                    .attr('STLpct' , '')
                    .attr('BLKpct' , '')
                    .attr('TOVpct' , '')
                    .attr('USGpct' , '')
                    .find("td").empty();
                })
            }

            if (selPlayerPos === 'C') {
                rowFunctionality('#C-row')
            } else if (selPlayerPos === 'PG') {
                rowFunctionality('#PG-row')
            } else if (selPlayerPos === 'SG') {
                rowFunctionality('#SG-row')
            } else if (selPlayerPos === 'PF') {
                rowFunctionality('#PF-row')
            } else if (selPlayerPos === 'SF') {
                rowFunctionality('#SF-row')
            }
        }
    });

    // function searchPlayers() {
    //     // Declare variables
    //     var input, filter, a, i;
    //     input = document.getElementById('search');
    //     filter = input.value.toUpperCase();

    //     // Loop through all response items, and hide those who don't match the search query
    //     for (i = 0; i < response.length; i++) {
    //         a = response[i].playerName;
    //         if (a.toUpperCase().indexOf(filter) > -1) {
    //             $('#available-players').append(
    //                 $("<tr>").append(
    //                     $('<td>').text(response[i].position),
    //                     $('<td>').text(response[i].playerName),
    //                     $('<td>').text("$" + parseInt(salary)),
    //                     $('<td>').html(posSelect),
    //                     $('<td>').html('<button class="add-player" value="' + response[i].playerName + salary + '">ADD</button>'),
    //                 ).val(response[i].position).attr('name', response[i].playerName).attr('data', i).attr('salary', salary).addClass('available-player-row'),
    //             )
    //         }
    //         else {
    //             $('.available-player-row').addClass('hidden');
    //         }
    //     }
    // };

})

$(".tab").on('click', function () {
    var tabValue = $(this).val();
    if (tabValue === 'all') {
        $('.available-player-row').removeClass('hidden')
        $(".tab").removeClass('active');
        $(this).addClass('active');
    } else if (tabValue === 'guards') {
        $('.available-player-row').removeClass('hidden')
        $(".tab").removeClass('active');
        $(this).addClass('active');
        $('.available-player-row').filter(function (index) {
            if ($(this).val() != 'G') {
                return index
            }
        }).addClass('hidden')
    } else if (tabValue === 'wings') {
        $('.available-player-row').removeClass('hidden')
        $(".tab").removeClass('active');
        $(this).addClass('active');
        $('.available-player-row').filter(function (index) {
            if (($(this).val() != 'G-F') && ($(this).val() != 'F-G') && ($(this).val() != 'F')) {
                return index
            }
        }).addClass('hidden')
    } else if (tabValue === 'bigs') {
        $('.available-player-row').removeClass('hidden')
        $(".tab").removeClass('active');
        $(this).addClass('active');
        $('.available-player-row').filter(function (index) {
            if (($(this).val() != 'C-F') && ($(this).val() != 'F-C') && ($(this).val() != 'C')) {
                return index
            }
        }).addClass('hidden')
    }
});

$('#save-team').on('click', function(){
    if($('#PG-row').attr('name') === "" || $('#SG-row').attr('name') === "" || $('#PF-row').attr('name') === "" || $('#SF-row').attr('name') === "" || $('#C-row').attr('name') === "" || $('#PG-row').attr('name') === undefined || $('#SG-row').attr('name') === undefined || $('#PF-row').attr('name') === undefined || $('#SF-row').attr('name') === undefined || $('#C-row').attr('name') === undefined){
        alert("All Positions Need to Be Filled")
    }else{
        var player0 = {
            position: $('#PG-row').attr('position'),
            name: $('#PG-row').attr('name'),
            TSpct: $('#PG-row').attr('TSpct'),
            ThreePAr: $('#PG-row').attr('ThreePAr'),
            ThreePCT: $('#PG-row').attr('ThreePCT'),
            FTr: $('#PG-row').attr('FTr'),
            FTpct: $('#PG-row').attr('FTpct'),
            ORBpct: $('#PG-row').attr('ORBpct'),
            DRBpct: $('#PG-row').attr('DRBpct'),
            ASTpct: $('#PG-row').attr('ASTpct'),
            STLpct: $('#PG-row').attr('STLpct'),
            BLKpct: $('#PG-row').attr('BLKpct'),
            TOVpct: $('#PG-row').attr('TOVpct'),
            USGpct: $('#PG-row').attr('USGpct')
        };

        var player1 = {
            position: $('#SG-row').attr('position'),
            name: $('#SG-row').attr('name'),
            TSpct: $('#SG-row').attr('TSpct'),
            ThreePAr: $('#SG-row').attr('ThreePAr'),
            ThreePCT: $('#SG-row').attr('ThreePCT'),
            FTr: $('#SG-row').attr('FTr'),
            FTpct: $('#SG-row').attr('FTpct'),
            ORBpct: $('#SG-row').attr('ORBpct'),
            DRBpct: $('#SG-row').attr('DRBpct'),
            ASTpct: $('#SG-row').attr('ASTpct'),
            STLpct: $('#SG-row').attr('STLpct'),
            BLKpct: $('#SG-row').attr('BLKpct'),
            TOVpct: $('#SG-row').attr('TOVpct'),
            USGpct: $('#SG-row').attr('USGpct')
        };

        var player2 = {
            position: $('#SF-row').attr('position'),
            name: $('#SF-row').attr('name'),
            TSpct: $('#SF-row').attr('TSpct'),
            ThreePAr: $('#SF-row').attr('ThreePAr'),
            ThreePCT: $('#SF-row').attr('ThreePCT'),
            FTr: $('#SF-row').attr('FTr'),
            FTpct: $('#SF-row').attr('FTpct'),
            ORBpct: $('#SF-row').attr('ORBpct'),
            DRBpct: $('#SF-row').attr('DRBpct'),
            ASTpct: $('#SF-row').attr('ASTpct'),
            STLpct: $('#SF-row').attr('STLpct'),
            BLKpct: $('#SF-row').attr('BLKpct'),
            TOVpct: $('#SF-row').attr('TOVpct'),
            USGpct: $('#SF-row').attr('USGpct')
        };

        var player3 = {
            position: $('#PF-row').attr('position'),
            name: $('#PF-row').attr('name'),
            TSpct: $('#PF-row').attr('TSpct'),
            ThreePAr: $('#PF-row').attr('ThreePAr'),
            ThreePCT: $('#PF-row').attr('ThreePCT'),
            FTr: $('#PF-row').attr('FTr'),
            FTpct: $('#PF-row').attr('FTpct'),
            ORBpct: $('#PF-row').attr('ORBpct'),
            DRBpct: $('#PF-row').attr('DRBpct'),
            ASTpct: $('#PF-row').attr('ASTpct'),
            STLpct: $('#PF-row').attr('STLpct'),
            BLKpct: $('#PF-row').attr('BLKpct'),
            TOVpct: $('#PF-row').attr('TOVpct'),
            USGpct: $('#PF-row').attr('USGpct')
        };

        var player4 = {
            position: $('#C-row').attr('position'),
            name: $('#C-row').attr('name'),
            TSpct: $('#C-row').attr('TSpct'),
            ThreePAr: $('#C-row').attr('ThreePAr'),
            ThreePCT: $('#C-row').attr('ThreePCT'),
            FTr: $('#C-row').attr('FTr'),
            FTpct: $('#C-row').attr('FTpct'),
            ORBpct: $('#C-row').attr('ORBpct'),
            DRBpct: $('#C-row').attr('DRBpct'),
            ASTpct: $('#C-row').attr('ASTpct'),
            STLpct: $('#C-row').attr('STLpct'),
            BLKpct: $('#C-row').attr('BLKpct'),
            TOVpct: $('#C-row').attr('TOVpct'),
            USGpct: $('#C-row').attr('USGpct')
        };

        console.log(player0);
        console.log(player1);
        console.log(player2);
        console.log(player3);
        console.log(player4);

        location.href = "/dashboard";
    };

});