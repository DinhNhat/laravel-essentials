//**************GLOBAL VARIABLES************
//array for selected items - checkboxes




var selected_rows = [];

//website url


//************FUNCTIONS*********************


// function compareArrayValues(main_array, compare_array){
//     //compare and check if the item already exists in both arrays
//
//     if($.isArray(main_array) && $.isArray(compare_array)){
//
//         console.log('array');
//         $.each(main_array, function(idx, value) {
//             if($.inArray(value, compare_array) !== -1) {
//                 console.log('Match Prod: ' + value);
//                 return 'true';
//
//             } else {
//                 console.log('Not Match: ' + value);
//                 return 'false';
//             }
//         });
//     }
// }



// //add class to selected row in a table
// function selectRow(table_row){
//     //add class to highlight checked row
//     if(table_row.hasClass('selected-row')) {
//         table_row.removeClass('selected-row');
//     } else {
//         table_row.addClass('selected-row');
//     }
// }



//used for ajax calls and other things to display array of errors on top of page
function displayPageErrors(values){
    var errorDiv = $('body').find('.errors');
    var errors = '';

    if(errorDiv.length === 0){
        errorDiv.empty();
    }

    $.each(values, function(index, value){
        errors += '<li>' + value + '</li>';
    });

    errorDiv.html(
        '<div class="alert alert-danger">' +
            '<button aria-hidden="true" data-dismiss="alert" class="close" type="button">×</button>' +
            '<ul class="list-unstyled">' +
                errors +
            '</ul>' +
        '</div>'
    );
}


function clearPageErrors(){
    var errorDiv = $('body').find('.errors');
    errorDiv.empty();
}

function displayToastrErrors(errors){
    $.each(errors, function(index, value){
        // errors += '<li>' + value + '</li>';
        toastr["error"](value, "Error!");
    });
}

//capitalize first letter of every word
function capitalizeFirstLetters(str) {
    return str.split(' ').map(function (e) {
        return e.replace(/([a-z])/, function (match, value) {
            return value.toUpperCase();
        })
    }).join(' ');
}


function clearModalError(){
    $(".modal-error").hide();
    $(".modal-error").html('');
}

function checkAndRemoveInputErrorClass(input){
    if(input.hasClass('input-validation-error')){
        input.removeClass('input-validation-error');
    }
}

//will switch tab where the input needs to be focused for form validation
function switchTabOnRequiredInput(submitBtn){
    $(submitBtn).click(function () {
        //search for tabs on the page
        if(submitBtn.closest('form').find('.nav-tabs').length){
            $(':required:invalid').each(function () {
                var id = $('.tab-pane').find(':required:invalid').closest('.tab-pane').attr('id');
                $('.nav a[href="#' + id + '"]').tab('show');
            });
        }
    });
}

function makeAllTabsEqualHeight (){
    if($('body').find('.tab-content').length){
        var panelHeight = 0;

        $('.tab-content').find('.panel-body').each(function(){
            if($(this).height() > panelHeight){
                panelHeight = $(this).height();
            }
        });

        $('body .tab-content').find('.panel-body').each(function(){
            $(this).css('min-height', panelHeight + 'px');
        });
    }
}


// function modalError(thisModal, errorMessage, status){
//
//     var modalError = thisModal.find('.modal-error');
//
//     if(status == 'hide'){
//         modalError.hide();
//     } else {
//         modalError.html(errorMessage).show();
//     }
// }

// function modalTableError(thisModal, errorMessage, status){
//
//     var tableError = thisModal.find('.modal-table-error');
//
//     if(status == 'hide'){
//         tableError.hide();
//     } else {
//         tableError.html(errorMessage).show();
//     }
//
// }


//------------for browse media modal---------------
// function browseMediaModal(singleSelect, file_type, galleryInputArray){
//
//     galleryInputArray = isset(galleryInputArray) ? galleryInputArray : [];
//
//
//     //if you want to select on or multiple images
//     singleSelect = (singleSelect == 'singleSelect') ? true : false;
//
//     var selectedImagesArray = [];
//
//     //**************Browse Media MODAL**************
//
//     var thisModal = $(".browse-media-modal");
//     var addSelectedButton = thisModal.find('.add-selected-button');
//
//     //add multiple images selected to array
//     thisModal.on('click', '.image', function(event){
//
//         //empty selected images array
//         //            selectedImagesArray = [];
//
//         var currentClickedImage = $(this);
//
//         //if single select is false, remove the following
//         if(singleSelect){
//             thisModal.find('.image').each(function(){
//                 //remove class from all but not the currently clicked image
//                 $(this).not(currentClickedImage).removeClass('selected');
//
//             });
//         }
//
//
//         $(this).toggleClass('selected');
//
//         //get image id
//         var selectedImageId = $(this).find('img').attr('data-image-id');
//
//         if($.inArray(selectedImageId, selectedImagesArray) !== -1){
//             //means its in array
//             //remove if exists
//             selectedImagesArray = $.grep(selectedImagesArray, function(value) {
//                 return value != selectedImageId;
//             });
//         } else {
//             selectedImagesArray.push(selectedImageId);
//         }
//
//     });
//
//
//     thisModal.on('hide.bs.modal', function () {
//
//         thisModal.find('.search-media-input').val('');
//
//         //empty all pictures
//         thisModal.find('.media-files-container').empty();
//
//         //
//         //            //clear selected rows array
//         //            selected_rows = [];
//
//
//         //hide any errors
//         //            thisModal.modalTableError().hide();
//         thisModal.modalError().hide();
//
//     });
//
//     thisModal.on('show.bs.modal', function () {
//         //clear selected product array
//         selectedImagesArray = [];
//
//     });
//
//
//     thisModal.on('input paste', '.search-media-input', delay(function(e){
//
//         //            //hide any errors
//         //            thisModal.modalTableError().hide();
//         thisModal.modalError().hide();
//
//         var searchQuery = $(this).val();
//
//         //has to be more than 2 characters
//         if(searchQuery.length >= 2) {
//             $.ajax({
//                 type : 'get',
//
//                 url : SITE_URL + '/office/media/browse-image-modal',
//                 data: {
// //                            'model': model,
//                     'file_type' : file_type,
//                     'query' : searchQuery
//                     //                        'existing_product_ids' : JSON.stringify(brandProductsArray)
//                 },
//                 success:function(result){
//                     ajaxDataResult(result);
//
//                 }
//             });
//
//         } else {
//             thisModal.find('.media-files-container').empty();
//         }
//
//     }, 500));
//
//
//
//     function ajaxDataResult(result){
//
//         var mediaFilesResult = '';
//
//         //check if result is empty
//         if(result.length !== 0) {
//
//             $.each(result, function(key, image){
//                 //check if product isset
//                 //                    var thumbnail_image = isset(product.main_image) ? product.thumbnail : "&nbsp;";
//                 var imagePath = isset(image.path) ? ASSET_URL + image.path : PRODUCT_IMAGE_PLACEHOLDER;
//                 var imageTitle = isset(image.title) ? image.title : '';
//
//                 mediaFilesResult +=
//                     '<li class="image-container">' +
//                         '<div class="image">' +
//                             '<img alt="image" class="img-responsive" title="' + imageTitle + '" src="' + imagePath + '" data-image-id="' + image.id + '">' +
//                         '</div>' +
//                     '</li>'
//             });
//
//             thisModal.find('.media-files-container').html(mediaFilesResult);
//
//         } else {
//
//             thisModal.find('.media-files-container').empty();
//
//             //show results not found div
//             thisModal.modalError('No results found').show();
//         }
//
//
//     }
//
//     addSelectedButton.on('click', function(){
//         //check if array is empty
//         if(selectedImagesArray.length !== 0 ) {
//
//             //disable the button to prevent clicking twice
//             // $(this).attr('disabled', true);
//
//
//
//             if(singleSelect){
//                 addSingleImageToPage(selectedImagesArray);
//             } else {
//                 addMultipleImageToPage(selectedImagesArray);
//             }
//
//
//         } else if(thisModal.find('.media-files-container').is(":empty")) {
//             thisModal.find('.search-media-input').focus();
//             thisModal.modalError('Please search media').show();
//         } else {
//             thisModal.modalError('You did not select any images').show();
//
//         }
//
//     });
//
//
//
//     function addMultipleImageToPage(items) {
//         var selectedImage = '';
//
//         var imagesToAdd = '';
//         $.each(items, function(key, value){
//
//             selectedImage = thisModal.find('img[data-image-id="' + items[key] + '"]');
//
//             imagesToAdd +=
//                 '<li class="product-image ui-sortable-handle" data-attachment_id="' + selectedImage.attr('data-image-id') + '">' +
//                     '<div class="image">' +
//                         '<img alt="image" class="img-responsive" src="'+ selectedImage.attr('src') +'">'+
//                     '</div>' +
//                     '<div class="image-actions">'+
//                         '<a class="image-action-remove-gallery btn btn-default btn-block">Remove</a>' +
//                     '</div>' +
//                 '</li>';
//         });
//
//         //put into the container
//         $('.product-images').append(imagesToAdd);
//
//         syncImageGalleryInputValues(galleryInputArray);
//
//         thisModal.modal('hide');
//
//     }
//
//     //add to main page function
//     function addSingleImageToPage(items){
//
//         //get image id input from main page
//         //            $('.image-id-hidden-input').val(items[0]);
//
//
//         var selectedImage = thisModal.find('img[data-image-id="' + items[0] + '"]');
//         //on the main page
//         $('.edit-image-container').empty();
//         $('.edit-image-container').append(
//             '<img class="img-144x144 main-image p-b-10" title="" src="' + selectedImage.attr('src') + '" >' +
//             '<div class="text-center"><a class="remove-image-link btn btn-default btn-block">Remove Image</a></div>' +
//             '<input type="hidden" class="image-id-hidden-input" name="image_id" value="' + selectedImage.attr('data-image-id') +'">'
//         );
//
//         //hide the modal
//         thisModal.modal('hide');
//     }
// }


//if the table contains remove-link, it will find closest table, get number of rows and make sure last row dows not get deleted
//will work with dynamically added rows
function removeTableRow(element){
    //don't remove the last row
    if(element.closest('tbody').find('tr').length > 1){
        element.closest('tr').remove();
    } else {
        toastr["error"]("You cannot remove the last row", "Error!");
    }

}


//count the amount of characters there is left on the
function characterCounter(inputField, maxLength, countingField){
    var maxlength = maxLength;
    var currentLength = inputField.val().length;

    if(currentLength > maxlength ){
        countingField.addClass('error-font-red bold');
    } else {
        countingField.removeClass('error-font-red bold');
    }

    countingField.text(maxlength - currentLength + " chars left");
}


function showNoResultandNoCheckbMark(table){
    //if all rows got deleted, show no results paragraph
    if(table.find('tbody tr').length == 0){
        table.closest('div').find('.no-results-in-table').show();

        //if the checkall checkbox is checked, uncheck it
        if(table.find('.checkAll').is(":checked")){
            table.find('.checkAll').prop('checked', false);
        }
    }
}


function addIfNoDuplicates(value, array){
    if($.inArray(value, array) === -1){
        return array.push(value);
    }

    return false;
}


function checkIfArrayIsEmpty(array){
    if($.isArray(array) && array.length) {
        return false;
    } else {
        return true;
    }
}


//php type isset variable
function isset(variable){
    if(typeof(variable) != "undefined" && variable !== null){
        return true;
    }
    return false;
}


//delay on things like live search
function delay(callback, ms) {
    var timer = 0;
    return function() {
        var context = this, args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
            callback.apply(context, args);
        }, ms || 0);
    };
}


function createSlug(str) {

    if(str.length != 0){
        var $slug = '';
        var trimmed = $.trim(str);

        $slug = trimmed.replace(/[^a-z0-9-]/gi, '-').
        replace(/-+/g, '-').
        replace(/^-|-$/g, '');
        return $slug.toLowerCase();
    } else {
        return str.toLowerCase();
    }

}



function clearModalInputsandTable(){
    $('.modal').on("hidden.bs.modal", function() {
        //if modal has form inputs reset them
        // if($(this).find('form').length > 0) {
        //     //if modal has a form reset it on close
        //     $(this).find('form').get(0).reset();
        // }


        if($(this).find('table.clear-on-close').length > 0) {
            //if modal has a table clear the table contents
            $(this)
                .find("input,textarea,select").val('').end()
                .find("tbody").empty().end()
                .find('.checkAll').prop("checked", false).end()
                .find('.alert').hide().end();
        }


    });
}


function isPDFFile(file){
    // /^([a-zA-Z0-9\s\S])+(.jpg|.jpeg|.gif|.png|.bmp)$/;
    var pdf_regex = /^([a-zA-Z0-9\s_\\.\-:])+(.pdf)$/;
    return pdf_regex.test(file.name.toLowerCase());

}


//Preview the image the as soon as it is selected on file upload
function readImage(input, pictureId) {
    // var picture_regex = /^([a-zA-Z0-9\s_\\.\-:])+(.jpg|.jpeg|.gif|.png|.bmp)$/; //old

    //todo look at pdf regex and see if ou need underscores and such
    var picture_regex = /^([a-zA-Z0-9\s\S])+(.jpg|.jpeg|.gif|.png|.bmp)$/;

    if (typeof (FileReader) != "undefined") {

        if (input.files && input.files[0]) {
            if (picture_regex.test(input.files[0].name.toLowerCase())) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    pictureId.attr('src', e.target.result);
                        // .width(150)
                        // .height(150);
                };
                reader.readAsDataURL(input.files[0]);
            } else {
                toastr["error"]("Only image files are accepted", "Error!");
            }
        }
    } else {
        toastr["error"]("Ths browser does not support HTML5 FileReader", "Error!");
    }
}

function isPicture(file) {

    var picture_regex = /^([a-zA-Z0-9\s\S])+(.jpg|.jpeg|.gif|.png|.bmp)$/;

    return picture_regex.test(file.name.toLowerCase());
}

//todo check if this function exists in thep ages
//on ajax call insert validation errors into the page, need to create a div class="errors" in order to make this work
function printErrorMessages(error, error_div_class_name){

    error_div_class_name = error_div_class_name || "error";

    var div = $('.' + error_div_class_name);

    div.html(
        '<div class="alert alert-danger">' +
            '<button aria-hidden="true" data-dismiss="alert" class="close" type="button">×</button>' +
            '<ul class="list-unstyled"></ul>'+
        '</div>');

    //if its an array, then itirate the array, otherwise, display it
    if($.isArray(error)){
        $.each(error, function( key, value ) {
            div.find("ul").append('<li>'+value+'</li>');
        });
    } else {
        div.find("ul").append('<li>'+error+'</li>');
    }

    //show div
    div.show();

}

function storeTabInSession(parentUlId, activeTab){
//    go to certain tab with local html5 session storage
    if (typeof(Storage) !== "undefined") {
        sessionStorage.setItem(parentUlId, activeTab);
    } else {
//                    alert('Some of the features of our website are not supported by your browser. Please update your browser.')
    }
}


//    reset select item to dafault
function resetSelect(){
    $("select").each(function () {
        $(this).prop('selectedIndex',0);
    });
}

//    reset select item to dafault
function resetCheckBox(){
    $('input:checkbox').each(function(){
        $(this).prop('checked', false);
    });
}


function checkAllChecboxChecked(table){

    // var table = $(this).closest('table');

    if(table.find(".checkBox").length == table.find(".checkBox:checked").length) {
        table.find("th .checkAll").prop("checked", true);
    }else {
        table.find("th .checkAll").prop("checked", false);
    }

    //todo on redirect->back() the checkboxes get checked, but the values dont pickup

}


function formatCurrency(number){
    // var numeral = require('numeral');
    if(number <= 0){
        return "$0.00";
    } else {

        return numeral(number).format('$0,0.00');
    }
}

//
// function clearModalForm(){
//     console.log($(this).find('form').);
//     $('.modal').on("hide.bs.modal", function() {
//         if($(this).find('form').length > 0) {
//             //if modal has a form reset it on close
//             $(this).find('form')[0].reset();
//
//         }
//     });
// }

function parseNumberToFloat(value){

    //todo check if value is not empty
    //remove thousands separator
    return parseFloat(value.replace(/,/g, ''));
}



//------------------variables-------------------





$(function() {

    //initialize functions;

    //make all tabs the same height
    // makeAllTabsEqualHeight();



    //on calendar icon click, focus on the input
    $('.calendar-icon').on('click', function(){
        $(this).closest('.input-group').find('input').focus();
    });

    //switch tabs and focus on input
    switchTabOnRequiredInput($('.submit-form-button'));

    //-----------toastr-----------
    toastr.options = {
        "closeButton": true,
        "debug": false,
        "progressBar": false,
        "preventDuplicates": false,
        "positionClass": "toast-top-right",
        "onclick": null,
        "showDuration": "400",
        "hideDuration": "1000",
        "timeOut": "7000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    };


    //-------------submit form in a modal--------------
    $(".submit-modal-form").on('click', function(){
        $(this).closest(".modal").find('form').submit();
    });




    //-------set focus on first input in any modal------------
    $('.modal').on('shown.bs.modal', function () {
//        $('#search-upsells').focus();
        $('input:first', this).focus();

    });

    //----------------Upload Button Functions------------------
    $('#event_files:file').on('change', function () {
        if ($.trim($(this).val()).length) {
            $("#file-upload").submit();
        }
    });

    $('#add_file').click(function () {
        $('#event_files').click();
    });

//--------------------Tab Actions---------------------------
//    got to certain tab depending on which has in url
    if (window.location.hash) {
        $('.nav-tabs a[href="'+window.location.hash+'"]').tab('show');
    }

    //store tab data in session
    $('a[data-toggle="tab"]').on('show.bs.tab', function (event) {
        //will store the parent ul's id of the current active tab
        storeTabInSession("active-tab", $(this).attr('href'));

    });

//if activetab data is stored, go to that tab
    if(sessionStorage.getItem('active-tab')) {
        $(".nav-tabs a[href='"+sessionStorage.getItem('active-tab')+"']").tab('show');
    }

//------------------------------------------------------------------

    // //Clear Form On Modal Close
    // clearModalForm();
    //
    // //Clear Inputs and Tables on Modal Close
    // clearModalInputsandTable();

    //add token to ajax configuration
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        error: function (x, status, error) {
            // if (x.status == 403) {
            //     alert("Sorry, your session has expired. Please login again to continue");
            //     window.location.href ='{{ url("/login") }}';
            // } else {
            //     alert("An error occurred: " + status + "nError: " + error);
            //     window.location.href ='{{ url("/login") }}';
            // }
        },

    });


//select 2 configuration
    $('.select2-single-selection').select2({
        theme: "bootstrap",
        // width: 'element',

        // dropdownAutoWidth: true,
    });
    $('.select2-multiple-selection').select2({
        theme: "bootstrap",
        dropdownAutoWidth: true,
    });

//go to selected tab on page load
    if (window.location.hash) {
        $('.nav-tabs a[href="'+window.location.hash+'"]').tab('show');
    }

    //if checkbox all is selected put the other checkbox values into an array
    $('.checkAll').click(function(){
        selected_rows = [];
        var table= $(this).closest('table');
        var checked = table.find(".checkBox").prop("checked", true);

        if($(this).prop("checked")) {

            checked.each(function(){
                selected_rows.push($(this).val());
            });

            table.find('tbody tr').addClass('selected-row');

        } else {

            selected_rows = [];

            table.find(".checkBox").prop("checked", false);
            table.find('tbody tr').removeClass('selected-row');

        }
    });


    // //if tables has selectable-table class, means tr in a modal added on the fly
    // adds class when clicked on a row
    $('table.selectable-table').on('click', 'tbody tr', function(event){

        var checkbox = $(this).find('.checkBox');

        //if its not an actual checkbox
       if(!$(event.target).is('input.checkBox')) {

           if (checkbox.is(":checked")) {

               $(this).removeClass('selected-row');
               selected_rows.splice($.inArray(checkbox.val(), selected_rows), 1);

               checkbox.prop("checked", false);

           } else {
               // checkbox.prop('checked', true);
               $(this).addClass('selected-row');
               selected_rows.push(checkbox.val());

               checkbox.prop("checked", true);
           }

           checkAllChecboxChecked(checkbox.closest('table'));
       }

    });


    function checkBoxSelectsRow(checkbox){
        if (checkbox.is(":checked")){
            selected_rows.push(checkbox.val());
            checkbox.closest('tr').addClass('selected-row');

        } else {
            selected_rows.splice($.inArray(checkbox.val(), selected_rows), 1);
            checkbox.closest('tr').removeClass('selected-row');

        }


        checkAllChecboxChecked(checkbox.closest('table'));
    }
    //if individual select boxes are clicked and unclicked, take out or put in values into an array
    $('body').on('click', '.checkBox', function(){
        checkBoxSelectsRow($(this));
    });


    //if individual select boxes are clicked and unclicked, take out or put in values into an array
    $('.checkBox').on('click', function(){
        checkBoxSelectsRow($(this));
    });


    $("button[name='selectAction']").on("click", (function(event) {
        var selectedValue = $(this).closest('div').find('[name="bulkSelect"] option:selected');

        if (selected_rows.length > 0) {
            switch(selectedValue.text()) {
                case 'Delete':
                    //if($(this).closest('div.tab-pane')){
                    //    $(this).closest('div.tab-pane').find('.delete_form:first').attr("action", selectValue.val() + '/' + selected);
                    //    $(this).closest('div.tab-pane').find('.delete_link:first').trigger("click");
                    //} else {
                    $('.delete_form:first').attr("action", selectedValue.val() + '/' + selected_rows);
                    $('.delete_link:first').trigger("click");
                    //}

//                                swal({
//                                            title: "Are you sure you would like to delete this?",
//                                            text: "You will not be able to recover this record!",
//                                            type: "warning",
//                                            showCancelButton: true,
//                                            confirmButtonColor: "#DD6B55",
//                                            confirmButtonText: "Yes, delete it!",
//                                            closeOnConfirm: false
//                                        },
//                                        function(){

//                                            below ajax is working!
//                                            $.ajax({
//                                                url: selectValue.val() + '/' + selected,
//                                                headers: {'X-CSRF-TOKEN': token},
//                                                type: "DELETE",
//    //                                            data: {
//    //                                                'todoId' : todoId,
//    //                                                'eventId' : eventId,
//    //                                                'completed' : 0
//    //                                            },
//                                                success: function(result){
//                                                    sweetAlert("Success!", result.msg , "success");
//                                                },
//                                                error: function(result){
//                                                    sweetAlert("Error!", "Looks like there has been some kind of an error", "error");
//                                                    console.log(result);
//                                                }
//                                            });
//                                        });
                    break;
                case 'Complete':
                    // console.log($('.completeTaskForm:first').attr("action", selectValue.val() + '/' + selected));
                    $('.completeTaskForm:first').attr("action", selectedValue.val() + '/' + selected_rows);
                    $('.completeTaskForm:first').submit();
                    break;
                case 'Pending':
                    $('.completeTaskForm:first').attr("action", selectedValue.val() + '/' + selected_rows);
                    $('.completeTaskForm:first').submit();
                    break;
                case 'Download':
                    window.location.href = selectedValue.val() + '/' + selected_rows;
                    break;
                case 'Restore':
                    window.location.href = selectedValue.val() + '/' + selected_rows;
                    break;
                case 'Detach':
                    swal({
                            title: "Are you sure you would like to detach this?",
                            // text: "You will not be able to recover this record!",
                            type: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#DD6B55",
                            confirmButtonText: "Yes, delete it!",
                            closeOnConfirm: false
                        },
                        function(){
                            window.location.href = selectedValue.val() + '/' + selected_rows;
                        });
                    break;
                case 'Remove Items':
                    //todo remove items select
                    $.each(selected_rows, function(key, value){
                        selectedValue.closest('')
                    });
                    break;
                default:
                    break;
            }
        } else {
            swal({
                title: "Looks like you havent selected any records",
                text: "Please make a selection to perform this action",
                type: "warning"
            });

        }

//                console.log(url);
    }));


//expand textarea as needed
    $(".auto_grow").keyup(function(e) {
        while($(this).outerHeight() < this.scrollHeight + parseFloat($(this).css("borderTopWidth")) + parseFloat($(this).css("borderBottomWidth"))) {
            $(this).height($(this).height()+1);
        };
    });


    //remove table row and its elements dynamically created
    $("table").on('click', ".remove-item", function(event){
        event.preventDefault();
        $(this).closest('tr').fadeOut().remove();
    });

    // //remove table row and its elements
    // $('.remove_item').on('click', function(){
    //     $(this).closest('tr').remove();
    // });

    //

    //detach button with confirmation
    $('.detach-button').on('click', function(event){
        event.preventDefault();

        var url = $(this).attr('href');

        swal({
                title: "Are you sure you would like to detach this?",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, delete it!",
                closeOnConfirm: false
            },
            function(){
                window.location.replace(url);
            });
    });


    //delete button with a confirmation
    $('.delete_link').on('click', function(event){
        event.preventDefault();

        var form = $(this).closest('form.delete_form');
        swal({
                title: "Are you sure you would like to delete this?",
                text: "You will not be able to recover this record!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, delete it!",
                closeOnConfirm: false
            },
            function(){
                form.submit();
            });
    });


    //making a row of a table clickable
    $(".clickable-row").on("click", function(e) {
        //if row has class with modal show, show modal
        // if (!$(this).hasClass('modalShow')){
        //     window.document.location = $(this).data("url");
        // }

        //invoke click on edit icon to show edit modal
        // $modalToShow = $(this).data('show');
        // $(this).find('a.' + $modalToShow).click();

        // $('#'+$modalToShow).modal('show');


        if($(this).data('url')){
            window.document.location = $(this).data("url");

        }

        if($(this).data('modal')){
            $('#'+$(this).data('modal')).modal('show');
        }

    });


    //    restricting clickable area on table
    $('.clickable-row').find('td:first-child').on('click', function(e){
        // console.log($(this).closest('tr').attr('data-modal'));
        if($(this).find('input').hasClass('checkBox')){
            e.stopPropagation();
        }


        // e.preventDefault();
    });
    $('.clickable-row').find('td:last-child').on('click', function(e){
        if($(this).hasClass('table-actions')){
            e.stopPropagation();
        }
    });

//    check if there is a success status on an input and add success class

    $("span.glyphicon-ok").each(function(){
        $(this).closest('div.form-group').addClass("has-success");
    });

    // $('table.sortable').filterTable({ // apply filterTable to all tables on this page
    //     inputSelector: '#input-filter', // use the existing input instead of creating a new one
    //     minRows: 1,  // display if min rows number exists
    // });


//date field
//     jQuery.datetimepicker.setLocale('en');
//
//     $('.datepicker').datetimepicker({
//         timepicker: false,
//         format:'F d, Y',
//     });
//
//     $('.timepicker').datetimepicker({
//         datepicker: false,
//         format:'h:i A',
//         // value:'12:00',
//     });
//
//     $('.datetimepicker').datetimepicker({
//         format:'F d, Y h:i A',
//         // value:'12:00'
//     });




});


jQuery.fn.fadeOutAndRemove = function(){
    $(this).fadeOut(400 ,function(){
        $(this).remove();
    })
};



// jQuery.fn.tableError = function(message){
//     var errorMessage = message || 'An error has occurred';
//
//     var modalError = $(this).find('.modal-table-error');
//
//     modalError.html(errorMessage);
//
//     return modalError;
// };



// jQuery.fn.error = function(message){
//     var errorMessage = message || 'An error has occurred';
//
//     var modalError = $(this).find('.modal-error');
//
//     modalError.html(errorMessage);
//
//     return modalError;
// };


// function modalError(thisModal, errorMessage, status){
//
//     var modalError = thisModal.find('.modal-error');
//
//     if(status == 'hide'){
//         modalError.hide();
//     } else {
//         modalError.html(errorMessage).show();
//     }
// }


//plugin to capitalize or lowercase input fields
(function ($) {
    $.fn.extend({

        //error within a modal
        modalError: function(message){
            var errorMessage = message || 'An error has occurred';

            var modalError = $(this).find('.modal-error');

            modalError.html(errorMessage);

            return modalError;
        },

        //modal table error message
        modalTableError: function(message){
            var errorMessage = message || 'An error has occurred';

            var modalError = $(this).find('.modal-table-error');

            modalError.html(errorMessage);

            return modalError;
        },

        // With every keystroke capitalize first letter of ALL words in the text
        upperFirstAll: function() {
            $(this).keyup(function(event) {
                var box = event.target;
                var txt = $(this).val();
                var start = box.selectionStart;
                var end = box.selectionEnd;

                $(this).val(txt.toLowerCase().replace(/^(.)|(\s|\-)(.)/g,
                    function(c) {
                        return c.toUpperCase();
                    }));
                box.setSelectionRange(start, end);
            });
            return this;
        },

        // With every keystroke capitalize first letter of the FIRST word in the text
        upperFirst: function() {
            $(this).keyup(function(event) {
                var box = event.target;
                var txt = $(this).val();
                var start = box.selectionStart;
                var end = box.selectionEnd;

                $(this).val(txt.toLowerCase().replace(/^(.)/g,
                    function(c) {
                        return c.toUpperCase();
                    }));
                box.setSelectionRange(start, end);
            });
            return this;
        },

        // Converts with every keystroke the whole text to lowercase
        lowerCase: function() {
            $(this).keyup(function(event) {
                var box = event.target;
                var txt = $(this).val();
                var start = box.selectionStart;
                var end = box.selectionEnd;

                $(this).val(txt.toLowerCase());
                box.setSelectionRange(start, end);
            });
            return this;
        },

        // Converts with every keystroke the whole text to uppercase
        upperCase: function() {
            $(this).keyup(function(event) {
                var box = event.target;
                var txt = $(this).val();
                var start = box.selectionStart;
                var end = box.selectionEnd;

                $(this).val(txt.toUpperCase());
                box.setSelectionRange(start, end);
            });
            return this;
        }

    });
}(jQuery));





