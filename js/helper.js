//HTML태그를 미리 만들어서 변수에 담았다.
//필요에 따라 수정해도 좋다.

var HTMLName = '%data%',
    HTMLAge = '<span>%data%</span>',
    HTMLEducation = '<span>%data%</span>',
    HTMLMajor = '<span>%data%</span>',
    HTMLPhone = '<span>%data%</span>',
    HTMLEmail = '<span>%data%</span>',
    HTMLAddress = '<span>%data%</span>',
    HTMLSex = '<span>%data%</span>',
    HTMLDescription = '<span>%data%</span>';


//자기소개에 필요한 정보를 담았다.
//필요에 따라 추가해도 좋다.

var model = {
  name: "내 이름은 배수지야.",
  age: "내나이는 25살입니다.",
  education: "(건국대학교다녀요...소곤소곤)",
  major: "저는 연극영화과입니다.",
  phone: "전화번호는 비밀입니다.",
  email: "이메일은 suji@likelion.org입니다.",
  address: "주소는 jyp입니다.",
  sex: "저는 여자입니다. 됐음좋겠다.",
  description: "나는 정말예쁘단다~~~~~",

  display: function (){
    
    //HTML태그의 %data%를 모델의 값으로 대체하기
    var NewName = HTMLName.replace("%data%", model.name);
    var NewAge = HTMLAge.replace("%data%", model.age);
    var NewEducation = HTMLEducation.replace("%data%", model.education);
    var NewMajor = HTMLMajor.replace("%data%", model.major);
    var NewPhone = HTMLPhone.replace("%data%", model.phone);
    var NewEmail = HTMLEmail.replace("%data%", model.email);
    var NewAddress = HTMLAddress.replace("%data%", model.address);
    var NewDescription = HTMLDescription.replace("%data%", model.description);
    var NewSex = HTMLSex.replace("%data%", model.sex);

    // 원하는 위치에 추가하기
    // jquery selector를 이용해서, 동적으로 원하는 위치에 미리 만들어둔 HTML 태그를 추가한다.
    $('.media-heading').append(NewName);
    $('.progress-bar').append(NewAge);
    $('.univ').append(NewEducation);
    $('.univ').prepend(NewMajor);
    $('.phone').append(NewPhone);
    $('.email').append(NewEmail);
    $('#address').append(NewAddress);
    $('.description').append(NewDescription);
    $('.sex').append(NewSex);
  }
}

//수정불가
//컨트롤러를 통해서 model.display를 실행합니다.
function contoller(){
  model.display();
}

contoller();
