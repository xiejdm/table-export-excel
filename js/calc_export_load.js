/**
 * Created by Mesogene on 2016/1/26.
 */
$(function(){
    $('#export').click(function(){
        $('#show').tableExport({
            separator: ',',
            tableName:'text',
            type:'excel',
            escape:'false',
            htmlContent:'false',
            consoleLog:'false'
        });
    });
    $('#load').click(function(){
        var local_t_array = localStorage.getItem("t_array").split(',');
        var local_col_n = localStorage.getItem("col_n").split(',');
        var local_col_m = localStorage.getItem("col_m").split(',');
        for(i = 0; i < local_t_array.length ; i++){
            $('#first_t' + (i + 1)).val(local_t_array[i]);
            console.log(i+1 , local_t_array[i])
        }
        for(i = 0; i < local_col_n.length ; i++){
            $('#col_n' + (i + 1)).val(local_col_n[i]);
        }
        for(i = 0; i < local_col_m.length ; i++){
            $('#col_m' + (i + 1)).val(local_col_m[i]);
        }
        $('#col_h').val(localStorage.getItem("col_h"));
        $('#col_l').val(localStorage.getItem("col_l"));
    });
    $('#calc').click(function(){
        var t_array =  new Array(
            $('#first_t1').val() == "" ? 0 :  $('#first_t1').val(),
            $('#first_t2').val() == "" ? 0 :  $('#first_t2').val(),
            $('#first_t3').val() == "" ? 0 :  $('#first_t3').val(),
            $('#first_t4').val() == "" ? 0 :  $('#first_t4').val(),
            $('#first_t5').val() == "" ? 0 :  $('#first_t5').val(),
            $('#first_t6').val() == "" ? 0 :  $('#first_t6').val(),
            $('#first_t7').val() == "" ? 0 :  $('#first_t7').val(),
            $('#first_t8').val() == "" ? 0 :  $('#first_t8').val(),
            $('#first_t9').val() == "" ? 0 :  $('#first_t9').val(),
            $('#first_t10').val() == "" ? 0 :  $('#first_t10').val(),
            $('#first_t11').val() == "" ? 0 :  $('#first_t11').val(),
            $('#first_t12').val() == "" ? 0 :  $('#first_t12').val(),
            $('#first_t13').val() == "" ? 0 :  $('#first_t13').val(),
            $('#first_t14').val() == "" ? 0 :  $('#first_t14').val(),
            $('#first_t15').val() == "" ? 0 :  $('#first_t15').val(),
            $('#first_t16').val() == "" ? 0 :  $('#first_t16').val(),
            $('#first_t17').val() == "" ? 0 :  $('#first_t17').val(),
            $('#first_t18').val() == "" ? 0 :  $('#first_t18').val(),
            $('#first_t19').val() == "" ? 0 :  $('#first_t19').val(),
            $('#first_t20').val() == "" ? 0 :  $('#first_t20').val()
        );
        var col_n = new Array(
            $('#col_n1').val() == "" ? 0 :  $('#col_n1').val(),
            $('#col_n2').val() == "" ? 0 :  $('#col_n2').val(),
            $('#col_n3').val() == "" ? 0 :  $('#col_n3').val(),
            $('#col_n4').val() == "" ? 0 :  $('#col_n4').val(),
            $('#col_n5').val() == "" ? 0 :  $('#col_n5').val(),
            $('#col_n6').val() == "" ? 0 :  $('#col_n6').val(),
            $('#col_n7').val() == "" ? 0 :  $('#col_n7').val(),
            $('#col_n8').val() == "" ? 0 :  $('#col_n8').val(),
            $('#col_n9').val() == "" ? 0 :  $('#col_n9').val(),
            $('#col_n10').val() == "" ? 0 :  $('#col_n10').val()
        );
        var col_m = new Array(
            $('#col_m1').val() == "" ? 0 :  $('#col_m1').val(),
            $('#col_m2').val() == "" ? 0 :  $('#col_m2').val(),
            $('#col_m3').val() == "" ? 0 :  $('#col_m3').val(),
            $('#col_m4').val() == "" ? 0 :  $('#col_m4').val(),
            $('#col_m5').val() == "" ? 0 :  $('#col_m5').val(),
            $('#col_m6').val() == "" ? 0 :  $('#col_m6').val(),
            $('#col_m7').val() == "" ? 0 :  $('#col_m7').val(),
            $('#col_m8').val() == "" ? 0 :  $('#col_m8').val(),
            $('#col_m9').val() == "" ? 0 :  $('#col_m9').val(),
            $('#col_m10').val() == "" ? 0 :  $('#col_m10').val()
        );
        localStorage.setItem('t_array', t_array);
        localStorage.setItem('col_n', col_n);
        localStorage.setItem('col_m', col_m);
        var l_value = $('#col_l').val();
        var h_value = $('#col_h').val();
        if(l_value == "" || h_value == ""){
            $('.alert').css('display', 'block') ;
            return;
        }
//      console.log(localStorage.getItem("m"));
        localStorage.setItem('col_l', l_value);
        localStorage.setItem('col_h', h_value);
        var h_l = h_value - l_value;
        $('#last_l').html(l_value);
        $('#last_h').html(h_value);
        for(j = 0; j < 10; j++){
            for(i = 0; i < 20; i++){
                // 临时存储t*n的值
                var tmp_n = col_n[j] * t_array[i];
                // 临时存储t*m的值
                var tmp_m =  col_m[j] * t_array[i];
                //  临时存储ne的值
                var tmp_n_e = l_value * 1 + h_l * tmp_n, tmp_n_e_id_flag = j + 20;
                // 设置id为 tr_j[0-9]_i[0-19]
                $('#tr_' + j + '_' + i).html(tmp_n);
                $('#tr_' + tmp_n_e_id_flag + '_' + i).html(tmp_n_e);
                //  临时存储me的值
                var tmp_m_e = h_value * 1 - h_l * tmp_m, tmp = j + 10, tmp_m_e_id_flag = j + 30;
                $('#tr_' + tmp + '_' + i).html(tmp_m);
                $('#tr_' + tmp_m_e_id_flag + '_' + i).html(tmp_m_e);
                // 设置横向表头T的括号值
                if(j == 0){
                    var k = i + 1;
                    $('#t' + k).html('T' + k + '(' + t_array[i] + ')');
                }
            }
            var y = j + 1;
            // 设置纵向表头N的括号值
            $('#y_n_' + y).html('N' + y + '(' + col_n[j] + ')');
            // 设置纵向表头M的括号值
            $('#y_m_' + y).html('M' + (j + 1) + '(' + col_m[j] + ')');
        }
        $('#show').css("display","block");
    });
});