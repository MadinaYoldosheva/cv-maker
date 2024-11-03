'use strict';





const NameSurnameInput = document.getElementById('NameSurnameInput');
const BirthInput = document.getElementById('BirthInput');
const PersonalInput = document.getElementById('PersonalInput');
const NationlatyInput = document.getElementById('NationlatyInput');
const GraduationInput = document.getElementById('GraduationInput');
const PartyInput = document.getElementById('PartyInput');
const EducationalInput = document.getElementById('EducationalInput');
const AcademicInput = document.getElementById('AcademicInput');
const TitleInput = document.getElementById('TitleInput');
const LanguageInput = document.getElementById('LanguageInput');
const StateInput = document.getElementById('StateInput');
const EduInfoInput = document.getElementById('EduInfoInput');
const ElectedBodiesInput = document.getElementById('ElectedBodiesInput');
const TextInput = document.getElementById('TextInput');

const IsmSharif = document.getElementById('IsmSharif');
const MenHaqimda = document.getElementById('MenHaqimda');
const TugilganYili = document.getElementById('TugilganYili');
const Millati = document.getElementById('Millati');
const Malumoti = document.getElementById('Malumoti');
const IlmiyDaraja = document.getElementById('IlmiyDaraja');
const QaysiTil = document.getElementById('QaysiTil');
const TugilganJoy = document.getElementById('TugilganJoy');
const Partiyaviyligi = document.getElementById('Partiyaviyligi');
const Tamomlagan = document.getElementById('Tamomlagan');
const IlmiyUnvon = document.getElementById('IlmiyUnvon');
const DavlatMuofotlari = document.getElementById('DavlatMuofotlari');
const Deputatlar = document.getElementById('Deputatlar');
const YourPhoto = document.querySelector('#YourPhoto img');
const ShortInformations = document.querySelector('#ShortInformations');

const ClickMe = document.getElementById('ClickMe');
ClickMe.addEventListener('click', () => {
    IsmSharif.textContent = NameSurnameInput.value;
    TugilganJoy.textContent=PersonalInput.value
    TugilganYili.textContent = BirthInput.value;
    Millati.textContent = NationlatyInput.value;
    Tamomlagan.textContent = GraduationInput.value;
    Partiyaviyligi.textContent = PartyInput.value;
    Malumoti.textContent = EducationalInput.value;
    IlmiyDaraja.textContent = AcademicInput.value;
    IlmiyUnvon.textContent = TitleInput.value;
    QaysiTil.textContent = LanguageInput.value;
    DavlatMuofotlari.textContent = StateInput.value;
    MenHaqimda.textContent = TextInput.value;
    Deputatlar.textContent = ElectedBodiesInput.value;

    YourPhoto.style.display = 'block';
    IsmSharif.style.display = 'block';
    MenHaqimda.style.display = 'block';
    ShortInformations.style.display = 'block';

   
    const inputs = [
        NameSurnameInput, BirthInput, PersonalInput, NationlatyInput, GraduationInput, PartyInput,
        EducationalInput, AcademicInput, TitleInput, LanguageInput, StateInput, TextInput, ElectedBodiesInput
    ];

    // inputs.forEach(input => {
    //     if (input.value === '') {
    //         input.style.borderColor = 'red';
    //         YourPhoto.style.display = 'none';
    //         IsmSharif.style.display = 'none';
    //         MenHaqimda.style.display = 'none';
    //         ShortInformations.style.display = 'none';
    //     } else {
    //         input.style.borderColor = ''; 
    //     }
    // });
    if(EducationalInput.value==''){
        EduInfoInput.classList.add('input-error');
    }
  
    inputs.forEach(input => {
        if (input.value === '') {
            input.classList.add('input-error');
            YourPhoto.style.display = 'none';
            IsmSharif.style.display = 'none';
            MenHaqimda.style.display = 'none';
            ShortInformations.style.display = 'none';
        } else {
            input.classList.remove('input-error'); 
        }
    });
});


document.getElementById('uploadImage').addEventListener('click', function() {
    document.getElementById('fileInput').click();
  });
  document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        document.getElementById('circleImage').src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });
const Add = document.getElementById('Add');
const DeleteLastTable = document.getElementById('DeleteLastTable');
const Transmission = document.getElementById('Transmission');
const Table = document.getElementById('JadvalBody');
const DisplayTable = document.querySelector('.DisplayTable');
const TableBody = document.getElementById('TableBody');
let rowData = [];
function AddTable() {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td><input type="text" class="InputQarindosh"></td>
        <td><input type="text" class="InputIsm"></td>
        <td><input type="text" class="InputTugilganJoy"></td>
        <td><input type="text" class="InputLavozim"></td>
        <td><input type="text" class="InputTurarJoy"></td>
    `;
    Table.appendChild(newRow);
    rowData.push({ qarindosh: '', ism: '', tugilganJoyi: '', lavozim: '', turarJoy: '' });
}

function DeleteTable() {
    const inputRows = Table.querySelectorAll('tr');
    if (inputRows.length > 1) {
        inputRows[inputRows.length - 1].remove();
        rowData.pop();
    }
}

function TransferData() {
    DisplayTable.style.display = 'block';
    const inputRows = Table.querySelectorAll('tr');
    inputRows.forEach((row, index) => {
        const inputs = row.querySelectorAll('input');
        if (inputs.length > 0) {
            rowData[index] = {
                qarindosh: inputs[0].value,
                ism: inputs[1].value,
                tugilganJoyi: inputs[2].value,
                lavozim: inputs[3].value,
                turarJoy: inputs[4].value
            };
        }
    });

    TableBody.innerHTML = `
        <tr>
            <th>Qarindoshligi</th>
            <th>Familiyasi, ismi va otasining ismi</th>
            <th>Tug'ilgan yili va joyi</th>
            <th>Ish joyi va lavozimi</th>
            <th>Turar joyi</th>
        </tr>
    `;

    rowData.forEach(data => {
        const displayRow = document.createElement('tr');
        displayRow.innerHTML = `
            <td class="qarindosh">${data.qarindosh}</td>
            <td class="Ism">${data.ism}</td>
            <td class="TugilganJoyi">${data.tugilganJoyi}</td>
            <td class="Lavozim">${data.lavozim}</td>
            <td class="TurarJoy">${data.turarJoy}</td>
        `;
        TableBody.appendChild(displayRow);
    });
}




Add.addEventListener('click', AddTable);
DeleteLastTable.addEventListener('click', DeleteTable);
Transmission.addEventListener('click', TransferData);


document.getElementById('download').addEventListener('click', (e) => {
    e.preventDefault();  
    var element = document.getElementById("ResumesContainer");
    var firstNameIn = "CV";
    var lastNameIn = "name"; 

    html2pdf()
        .from(element)
        .set({
            margin: 1,
            filename: `${firstNameIn} ${lastNameIn}'s cv`,
            html2canvas: { scale: 2 },
            jsPDF: { format: 'a4', orientation: 'portrait' }
        })
        .save(); 

    console.log("Button clicked");
});


