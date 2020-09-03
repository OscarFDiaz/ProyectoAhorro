
function loadIcons() {
  let iconsView = document.getElementById("expenseIconListOfIcons");
  iconsView.innerHTML = "";

  let iconColor = document.getElementById("newExpenseColor").value;

  iconsView.innerHTML = `<i class="expenseIconList ion-md-airplane" style="--expenseIconColor: ${iconColor}" onclick="selectIcon('ion-md-airplane', '${iconColor}')"></i>
    <i class="expenseIconList ion-md-alarm" style="--expenseIconColor: ${iconColor}" onclick="selectIcon('ion-md-alarm', '${iconColor}')"></i>
    <i class="expenseIconList ion-md-flame" style="--expenseIconColor: ${iconColor}" onclick="selectIcon('ion-md-flame', '${iconColor}')"></i>
    <i class="expenseIconList ion-md-aperture" style="--expenseIconColor: ${iconColor}" onclick="selectIcon('ion-md-aperture', '${iconColor}')"></i>
    <i class="expenseIconList ion-md-baseball" style="--expenseIconColor: ${iconColor}" onclick="selectIcon('ion-md-baseball', '${iconColor}')"></i>
    <i class="expenseIconList ion-md-basket" style="--expenseIconColor: ${iconColor}" onclick="selectIcon('ion-md-basket', '${iconColor}')"></i>
    <i class="expenseIconList ion-md-basketball" style="--expenseIconColor: ${iconColor}" onclick="selectIcon('ion-md-basketball', '${iconColor}')"></i>
    <i class="expenseIconList ion-md-beaker" style="--expenseIconColor: ${iconColor}" onclick="selectIcon('ion-md-beaker', '${iconColor}')"></i>
    <i class="expenseIconList ion-md-beer" style="--expenseIconColor: ${iconColor}" onclick="selectIcon('ion-md-beer', '${iconColor}')"></i>
    <i class="expenseIconList ion-md-bicycle" style="--expenseIconColor: ${iconColor}" onclick="selectIcon('ion-md-bicycle', '${iconColor}')"></i>
    <i class="expenseIconList ion-md-boat" style="--expenseIconColor: ${iconColor}" onclick="selectIcon('ion-md-boat', '${iconColor}')"></i>
    <i class="expenseIconList ion-md-body" style="--expenseIconColor: ${iconColor}" onclick="selectIcon('ion-md-body', '${iconColor}')"></i>
    <i class="expenseIconList ion-md-book" style="--expenseIconColor: ${iconColor}" onclick="selectIcon('ion-md-book', '${iconColor}')"></i>
    <i class="expenseIconList ion-md-brush" style="--expenseIconColor: ${iconColor}" onclick="selectIcon('ion-md-brush', '${iconColor}')"></i>
    <i class="expenseIconList ion-md-build" style="--expenseIconColor: ${iconColor}" onclick="selectIcon('ion-md-build', '${iconColor}')"></i>
    <i class="expenseIconList ion-md-bus" style="--expenseIconColor: ${iconColor}" onclick="selectIcon('ion-md-bus', '${iconColor}')"></i>
    <i class="expenseIconList ion-md-cafe" style="--expenseIconColor: ${iconColor}" onclick="selectIcon('ion-md-cafe', '${iconColor}')"></i>
    <i class="expenseIconList ion-md-car" style="--expenseIconColor: ${iconColor}" onclick="selectIcon('ion-md-car', '${iconColor}')"></i>
    <i class="expenseIconList ion-md-cart" style="--expenseIconColor: ${iconColor}" onclick="selectIcon('ion-md-cart', '${iconColor}')"></i>
    <i class="expenseIconList ion-md-cash" style="--expenseIconColor: ${iconColor}" onclick="selectIcon('ion-md-cash', '${iconColor}')"></i>
    <i class="expenseIconList ion-ios-paper" style="--expenseIconColor: ${iconColor}" onclick="selectIcon('ion-ios-paper', '${iconColor}')"></i>
    <i class="expenseIconList ion-md-construct" style="--expenseIconColor: ${iconColor}" onclick="selectIcon('ion-md-construct', '${iconColor}')"></i>
    <i class="expenseIconList ion-md-desktop" style="--expenseIconColor: ${iconColor}" onclick="selectIcon('ion-md-desktop', '${iconColor}')"></i>
    <i class="expenseIconList ion-md-eye" style="--expenseIconColor: ${iconColor}" onclick="selectIcon('ion-md-eye', '${iconColor}')"></i>
    <i class="expenseIconList ion-md-film" style="--expenseIconColor: ${iconColor}" onclick="selectIcon('ion-md-film', '${iconColor}')"></i>
    <i class="expenseIconList ion-md-fitness" style="--expenseIconColor: ${iconColor}" onclick="selectIcon('ion-md-fitness', '${iconColor}')"></i>
    <i class="expenseIconList ion-md-flask" style="--expenseIconColor: ${iconColor}" onclick="selectIcon('ion-md-flask', '${iconColor}')"></i>
    <i class="expenseIconList ion-md-football" style="--expenseIconColor: ${iconColor}" onclick="selectIcon('ion-md-football', '${iconColor}')"></i>
    <i class="expenseIconList ion-md-gift" style="--expenseIconColor: ${iconColor}" onclick="selectIcon('ion-md-gift', '${iconColor}')"></i>
    <i class="expenseIconList ion-md-glasses" style="--expenseIconColor: ${iconColor}" onclick="selectIcon('ion-md-glasses', '${iconColor}')"></i>
    <i class="expenseIconList ion-md-happy" style="--expenseIconColor: ${iconColor}" onclick="selectIcon('ion-md-happy', '${iconColor}')"></i>
    <i class="expenseIconList ion-md-headset" style="--expenseIconColor: ${iconColor}" onclick="selectIcon('ion-md-headset', '${iconColor}')"></i>
    <i class="expenseIconList ion-md-heart" style="--expenseIconColor: ${iconColor}" onclick="selectIcon('ion-md-heart', '${iconColor}')"></i>
    <i class="expenseIconList ion-md-home" style="--expenseIconColor: ${iconColor}" onclick="selectIcon('ion-md-home', '${iconColor}')"></i>
    <i class="expenseIconList ion-md-pricetags" style="--expenseIconColor: ${iconColor}" onclick="selectIcon('ion-md-pricetags', '${iconColor}')"></i>
    <i class="expenseIconList ion-md-images" style="--expenseIconColor: ${iconColor}" onclick="selectIcon('ion-md-images', '${iconColor}')"></i>
    <i class="expenseIconList ion-md-jet" style="--expenseIconColor: ${iconColor}" onclick="selectIcon('ion-md-jet', '${iconColor}')"></i>
    <i class="expenseIconList ion-md-laptop" style="--expenseIconColor: ${iconColor}" onclick="selectIcon('ion-md-laptop', '${iconColor}')"></i>
    <i class="expenseIconList ion-md-man" style="--expenseIconColor: ${iconColor}" onclick="selectIcon('ion-md-man', '${iconColor}')"></i>
    <i class="expenseIconList ion-md-map" style="--expenseIconColor: ${iconColor}" onclick="selectIcon('ion-md-map', '${iconColor}')"></i>
    <i class="expenseIconList ion-md-medkit" style="--expenseIconColor: ${iconColor}" onclick="selectIcon('ion-md-medkit', '${iconColor}')"></i>
    <i class="expenseIconList ion-md-microphone" style="--expenseIconColor: ${iconColor}" onclick="selectIcon('ion-md-microphone', '${iconColor}')"></i>
    <i class="expenseIconList ion-md-bookmarks" style="--expenseIconColor: ${iconColor}" onclick="selectIcon('ion-md-bookmarks', '${iconColor}')"></i>
    <i class="expenseIconList ion-md-compass" style="--expenseIconColor: ${iconColor}" onclick="selectIcon('ion-md-compass', '${iconColor}')"></i>
    <i class="expenseIconList ion-md-pin" style="--expenseIconColor: ${iconColor}" onclick="selectIcon('ion-md-pin', '${iconColor}')"></i>
    <i class="expenseIconList ion-md-pizza" style="--expenseIconColor: ${iconColor}" onclick="selectIcon('ion-md-pizza', '${iconColor}')"></i>
    <i class="expenseIconList ion-md-print" style="--expenseIconColor: ${iconColor}" onclick="selectIcon('ion-md-print', '${iconColor}')"></i>
    <i class="expenseIconList ion-md-rose" style="--expenseIconColor: ${iconColor}" onclick="selectIcon('ion-md-rose', '${iconColor}')"></i>
    <i class="expenseIconList ion-md-school" style="--expenseIconColor: ${iconColor}" onclick="selectIcon('ion-md-school', '${iconColor}')"></i>
    <i class="expenseIconList ion-md-shirt" style="--expenseIconColor: ${iconColor}" onclick="selectIcon('ion-md-shirt', '${iconColor}')"></i>
    <i class="expenseIconList ion-md-subway" style="--expenseIconColor: ${iconColor}" onclick="selectIcon('ion-md-subway', '${iconColor}')"></i>
    <i class="expenseIconList ion-md-umbrella" style="--expenseIconColor: ${iconColor}" onclick="selectIcon('ion-md-umbrella', '${iconColor}')"></i>
    <i class="expenseIconList ion-md-wallet" style="--expenseIconColor: ${iconColor}" onclick="selectIcon('ion-md-wallet', '${iconColor}')"></i>
    <i class="expenseIconList ion-md-woman" style="--expenseIconColor: ${iconColor}" onclick="selectIcon('ion-md-woman', '${iconColor}')"></i>
    <i class="expenseIconList ion-md-wine" style="--expenseIconColor: ${iconColor}" onclick="selectIcon('ion-md-wine', '${iconColor}')"></i>`;
}

function changeTitlePreview() {
  let newTitle = document.getElementById("newExpenseName").value;
  let oldTitle = document.getElementById("expensePrevTitle");

  if (newTitle == "" || newTitle == null) {
    oldTitle.innerHTML = `NOMBRE <i class="expenseIcon ion-md-laptop"></i>`;
  } else {
    oldTitle.innerHTML = "";
    oldTitle.innerHTML = newTitle;
  }
}

function selectIcon(iconName, iconColor) {

    sessionStorage.setItem("expenseIconName", iconName);
    // Oculto los iconos, ya tengo uno seleccionado
    document.getElementById("expandableListContainer").hideExpansion();

    // Añado el icono seleccionado
    let iconElement = document.getElementById("expensePrevIcon");
    iconElement.className = '';
    iconElement.classList.add("expenseIcon");
    iconElement.classList.add(iconName);
    // Añado el color
    iconElement.style.cssText = `--expenseIconColorPrev: ${iconColor}`;
}

function makeNewExpense() {
  let expenseName = document.getElementById("newExpenseName").value;
  let totalExpense = 0;
  let mainDate = new Date().toJSON().slice(0,10);
  let iconName = sessionStorage.getItem("expenseIconName");
  let expenseColor = document.getElementById("newExpenseColor").value;

  sessionStorage.removeItem("expenseIconName");

  if (expenseName == "" || expenseName == null) {
    ons.notification.toast("Un momento, el gasto necesita un nombre!", {
      title: "Error!",
      timeout: 2000,
      animation: "ascend",
    });
    return;
  } else if (iconName == "" || iconName == null) {
    iconName = "ion-md-laptop";
  }

  let expense = {
    expenseName,
    totalExpense,
    mainDate,
    iconName,
    expenseColor
  };

  /* Guardo el expense original*/
  if (localStorage.getItem("expenseStorage") === null) {
    let expenseArray = [];
    expenseArray.push(expense);
    localStorage.setItem("expenseStorage", JSON.stringify(expenseArray));
  } else {
    let expenseArray = JSON.parse(localStorage.getItem("expenseStorage"));
    expenseArray.push(expense);
    localStorage.setItem("expenseStorage", JSON.stringify(expenseArray));
  }

  ons.notification.toast("Nuevo gasto añadido!", {
    title: "Aviso!",
    timeout: 2000,
    animation: "ascend",
  });

  getExpenses();
  functionPopPage();
}

function getExpenses() {
  let expenses = JSON.parse(localStorage.getItem("expenseStorage"));
  let expensesView = document.getElementById("expensesContainer");

  document.getElementById("expensesContainer").innerHTML = "";

  if (expenses == null || expenses == "null") {
    let tutorial = localStorage.getItem("storageSwitchTutorial");
    if(tutorial == true || tutorial == "true"){
      expensesView.innerHTML += `
      <ons-card>
        <ons-list style="background: none;" id="expenseListOfExpensesContainer">
          <ons-list-item id="expandableListContainer" expandable style="margin-top: 0px;">
            <label class="iconExpenseLabel" style="margin-left: 50px;">
              VER TUTORIAL
            </label>
            <div class="expandable-content" id="expenseListOfExpenses" style="grid-template-columns: 1fr;">
              <p class="paraTutorial">
                Aquí podrás añadir los gastos que vayas realizando, los podrás separar en categorías, podrás seleccionar un color y un icono para cada categoría,
                estos gastos se verán reflejados en la pantalla de "INICIO", donde está la gráfica en forma de dona, también podrás seleccionar si deseas remover el gasto a
                alguna de tus carteras ubicadas en "MI DINERO", si reinicias los gastos ese dinero no se actualizara.
              </p>
              <p class="paraTutorial">
                Podrás añadir gastos individualmente, se mostrara cuanto has gastado en cada categoría y te dira los gastos en total.
              </p>
              <p class="paraTutorial">
                Entrando a tu categoría podrás ver una lista de todos los gastos que has generado, se mostraran conforme los ballas creando, primero estara el último creado.
              </p>
              <p class="paraTutorial">
                Podrás reiniciar todos los gastos realizados en una categoría entrando a esta y dando en "REINICIAR".
              </p>
              <p class="paraTutorial">
                Para crear un nuevo gasto pulsa "AÑADIR NUEVO".
              </p>
            </div>
          </ons-list-item>
        </ons-list>
      </ons-card>`;
      return;
    }
    return;
  } else if (expenses.length == 0) {
    let tutorial = localStorage.getItem("storageSwitchTutorial");
    if(tutorial == true || tutorial == "true"){
      expensesView.innerHTML += `
      <ons-card>
        <ons-list style="background: none;" id="expenseListOfExpensesContainer">
          <ons-list-item id="expandableListContainer" expandable style="margin-top: 0px;">
            <label class="iconExpenseLabel" style="margin-left: 50px;">
              VER TUTORIAL
            </label>
            <div class="expandable-content" id="expenseListOfExpenses" style="grid-template-columns: 1fr;">
              <p class="paraTutorial">
                Aquí podrás añadir los gastos que vayas realizando, los podrás separar en categorías, podrás seleccionar un color y un icono para cada categoría,
                estos gastos se verán reflejados en la pantalla de "INICIO", donde está la gráfica en forma de dona, también podrás seleccionar si deseas remover el gasto a
                alguna de tus carteras ubicadas en "MI DINERO", si reinicias los gastos ese dinero no se actualizara.
              </p>
              <p class="paraTutorial">
                Podrás añadir gastos individualmente, se mostrara cuanto has gastado en cada categoría y te dira los gastos en total.
              </p>
              <p class="paraTutorial">
                Entrando a tu categoría podrás ver una lista de todos los gastos que has generado, se mostraran conforme los ballas creando, primero estara el último creado.
              </p>
              <p class="paraTutorial">
                Podrás reiniciar todos los gastos realizados en una categoría entrando a esta y dando en "REINICIAR".
              </p>
              <p class="paraTutorial">
                Para crear un nuevo gasto pulsa "AÑADIR NUEVO".
              </p>
            </div>
          </ons-list-item>
        </ons-list>
      </ons-card>`;
      return;
    }
    return;
  }

  for(let i = 0; i < expenses.length; i++) {
    let eName = expenses[i].expenseName;
    let eicon = expenses[i].iconName;
    let eColor = expenses[i].expenseColor;
    let eExpense = expenses[i].totalExpense;

    expensesView.innerHTML += 
    `<ons-card>
      <div class="title expenseTitle" onclick="findExpense('${eName}')">
        ${eName}
        <i class="expenseIcon ${eicon}" style="--expenseIconColorPrev: ${eColor}"></i>
      </div>
      <div class="content">
        <label class="expenseInfo">$ ${eExpense} GASTADOS TOTALMENTE</label>
      </div>
      <ons-button class="moneyButtonAdd" style="margin-bottom: 16px;" onclick="addExpenseToExpense('${eName}')" > 
        AÑADIR GASTO
      </ons-button>
      <ons-button class="moneyButtonDe" style="margin-bottom: 16px;" onclick="deleteExpense('${eName}')" >
        ELIMINAR
      </ons-button>
    </ons-card>`;
  }
}

function findExpense(sendName){
  let expenses = JSON.parse(localStorage.getItem("expenseStorage"));

  for (let i = 0; i < expenses.length; i++) {
    let eName = expenses[i].expenseName;

    if (eName == sendName){
      let findExpenseObject = expenses[i];

      if (sessionStorage.getItem("sessionFindGoal") === null) {
        sessionStorage.setItem(
          "sessionFindGoal",
          JSON.stringify(findExpenseObject)
        );
      } else {
        sessionStorage.removeItem("sessionFindGoal");
        sessionStorage.setItem(
          "sessionFindGoal",
          JSON.stringify(findExpenseObject)
        );
      }

      const navigator = document.querySelector("#navigator");
      navigator.pushPage("detailExpense.html");
      break;
    }
  }
}

function addExpenseToExpense(sendName) {
  let expenses = JSON.parse(localStorage.getItem("expenseStorage"));

  for (let i = 0; i < expenses.length; i++) {
    let eName = expenses[i].expenseName;

    if (eName == sendName) {

      let objectFinded = expenses[i].expenseName;

      if (sessionStorage.getItem("sessionFindExpense") === null) {
        sessionStorage.setItem(
          "sessionFindExpense",
          objectFinded
        );
      } else {
        sessionStorage.removeItem("sessionFindExpense");
        sessionStorage.setItem(
          "sessionFindExpense",
          objectFinded
        );
      }
      createAlertDialogToAddExpense();
      break;
    }
  }
}

function resetExpense(sendName) {
  ons.notification.confirm({
    message: "Estas seguro de borrar todos los gastos realizados?, la fecha de creación no se modificara.",
    title: "Aviso!",
    buttonLabels: ["Sí", "Cancelar"],
    animation: "default",
    primaryButtonIndex: 1,
    cancelable: true,
    callback: function (index) {
      if (0 === index) {
        let detailExpenses = JSON.parse(localStorage.getItem("expenseDetailStorage"))

        if (detailExpenses == null || detailExpenses == "null") {
          ons.notification.toast("Un momento, no hay gastos para borrar, me querias intentar engañar?", {
            title: "Aviso!",
            timeout: 2000,
            animation: "ascend",
          });
          return;
        }

        if (detailExpenses.length == 0 || detailExpenses.length == "0") {
          ons.notification.toast("Un momento, no hay gastos para borrar, me querias intentar engañar?", {
            title: "Aviso!",
            timeout: 2000,
            animation: "ascend",
          });
          return;
        }

        for (let i = 0; i < detailExpenses.length; i++) {
          let name = detailExpenses[i].expenseName;
          if (name === sendName || name == sendName) {
            detailExpenses.splice(i, 1);
            i--;
          }
        }
        localStorage.setItem("expenseDetailStorage", JSON.stringify(detailExpenses));

        /* RESETEO LOS CONTADORES DEL EXPENSE A 0*/
        let exName = sendName;
      
        let expensesStorage = JSON.parse(localStorage.getItem("expenseStorage"));
      
        let expense;
        let index;
        for (let i = 0; i < expensesStorage.length; i++) {
          if (expensesStorage[i].expenseName == exName) {
            expense = expensesStorage[i];
            index = i;
            break;
          }
        }
      
        expense.totalExpense = 0;
      
        /* Guardo el expense original*/
        if (localStorage.getItem("expenseStorage") === null) {
          let expenseArray = [];
          expenseArray.push(expense);
          localStorage.setItem("expenseStorage", JSON.stringify(expenseArray));
        } else {
          let expenseArray = JSON.parse(localStorage.getItem("expenseStorage"));
          expenseArray[index] = expense;
          localStorage.setItem("expenseStorage", JSON.stringify(expenseArray));
        }
        
        functionPopPage();
        
        getExpenses();
        ons.notification.toast("Se han reiniciado los gastos!, un nuevo comienzo...", {
          title: "Aviso!",
          timeout: 2000,
          animation: "ascend",
        });
      } else {
        ons.notification.toast("De acuerdo, todo fluye como normalmente!", {
          title: "Aviso!",
          timeout: 1000,
          animation: "ascend",
        });
      }
    },
  });
}

function deleteExpense(sendName) {
  ons.notification.confirm({
    message: "Estas seguro de borrar el gasto totalmente?",
    title: "Aviso!",
    buttonLabels: ["Sí", "Cancelar"],
    animation: "default",
    primaryButtonIndex: 1,
    cancelable: true,
    callback: function (index) {
      if (0 === index) {
        let expenses = JSON.parse(localStorage.getItem("expenseStorage"));
        let detailExpenses = JSON.parse(localStorage.getItem("expenseDetailStorage"))

        for (let i = 0; i < expenses.length; i++) {
          if (expenses[i].expenseName == sendName) {
            expenses.splice(i, 1);
            break;
          }
        }
        localStorage.setItem("expenseStorage", JSON.stringify(expenses));

        if (detailExpenses == null || detailExpenses == "null") {
        } else {
          for (let i = 0; i < detailExpenses.length; i++) { //null?
            if (detailExpenses[i].expenseName == sendName) {
              detailExpenses.splice(i, 1);
              i--;
            }
          }
          localStorage.setItem("expenseDetailStorage", JSON.stringify(detailExpenses));
        }

        getExpenses();

        ons.notification.toast("Se ha elimindado el gasto seleccionado!", {
          title: "Aviso!",
          timeout: 2000,
          animation: "ascend",
        });
      } else {
        ons.notification.toast("De acuerdo, todo fluye como normalmente!", {
          title: "Aviso!",
          timeout: 1000,
          animation: "ascend",
        });
      }
    },
  });
}

function updateExpenseTotalMoney(sendName, amountSend) {
  let exName = sendName;
  let newAmount = amountSend;

  let expensesStorage = JSON.parse(localStorage.getItem("expenseStorage"));

  let expense;
  let index;
  for (let i = 0; i < expensesStorage.length; i++) {
    if (expensesStorage[i].expenseName == exName) {
      expense = expensesStorage[i];
      index = i;
      break;
    }
  }

  expense.totalExpense += +newAmount;

  /* Guardo el expense original*/
  if (localStorage.getItem("expenseStorage") === null) {
    let expenseArray = [];
    expenseArray.push(expense);
    localStorage.setItem("expenseStorage", JSON.stringify(expenseArray));
  } else {
    let expenseArray = JSON.parse(localStorage.getItem("expenseStorage"));
    expenseArray[index] = expense;
    localStorage.setItem("expenseStorage", JSON.stringify(expenseArray));
  }

  getExpenses();
}

function getAmountFDays(sendName){
  let storage = JSON.parse(localStorage.getItem("expenseDetailStorage"));

  let today = new Date().toJSON().slice(0, 10);
  let total = 0;
  for(let i = 0; i < storage.length; i++) {
    if(storage[i].expenseName == sendName) {
      let dateD = dateDiff(storage[i].inDate, today);
      if (dateD < 16 && dateD >= 0){
        total = +total + +storage[i].inAmount;
      }
    }
  }
  return total;
}

function getAmountTDays(sendName){
  let storage = JSON.parse(localStorage.getItem("expenseDetailStorage"));

  let today = new Date().toJSON().slice(0, 10);
  let total = 0;
  for(let i = 0; i < storage.length; i++) {
    if(storage[i].expenseName == sendName) {
      let dateD = dateDiff(storage[i].inDate, today);
      if (dateD < 32 && dateD >= 0){
        total = +total + +storage[i].inAmount;
      }
    }
  }
  return total;
}

function dateDiff(date1, date2) {
  dt1 = new Date(date1);
  dt2 = new Date(date2);
  return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
}

function loadDetailExpense() {
  
  document.getElementById("detailExpenseContainer").innerHTML = "";

  let retrievedExpense = sessionStorage.getItem("sessionFindGoal");
  let parseExpense = JSON.parse(retrievedExpense);

  let eName = parseExpense.expenseName;
  let eTotal = parseExpense.totalExpense;
  let mDate = parseExpense.mainDate;

  let lastFDays, lastTDays;

  if (eTotal == 0) {
    lastFDays = lastTDays = 0;
  } else {
    lastFDays = getAmountFDays(eName);
    lastTDays = getAmountTDays(eName);
  }

  let expenseView = document.getElementById("detailExpenseContainer");
  expenseView.innerHTML = "";

  document.getElementById("titleDetailExpense").innerHTML = eName;

  expenseView.innerHTML += `<ons-card style="padding-bottom:16px">
    <div class="content">
      <label class="labelDetailExpense"
        >Fecha creación:
        <span id="expenseCreationDate" class="labelInfoDetailExpense"
          >${mDate}</span
        ></label
      >
    </div>
    <ons-button class="flatButton" onclick="editExpense('${eName}')">EDITAR GASTO</ons-button>
  </ons-card>

  <ons-card>
    <div class="content">
      <label class="labelDetailExpense"
        >Gasto total: $ 
        <span id="totalExpenseDetail" class="labelInfoDetailExpense"
          >${eTotal}</span
        ></label
      >
      
      <label class="labelDetailExpense"
        >Últimos 15 días: $ 
        <span id="lastDaysDetail" class="labelInfoDetailExpense"
          >${lastFDays}</span
        ></label
      >
      <label class="labelDetailExpense"
        >Últimos 30 días: $ 
        <span id="lastMonthDetail" class="labelInfoDetailExpense"
          >${lastTDays}</span
        ></label
      >
    </div>
  </ons-card>
  
  
  <ons-card>
    <ons-list style="background: none;" id="expenseListOfExpensesContainer">
      <ons-list-item id="expandableListContainer" expandable style="margin-top: 0px;">
        <label class="iconExpenseLabel" style="margin-left: 50px;">
          VER GASTOS
        </label>
        <div class="expandable-content" id="expenseListOfExpenses" style="grid-template-columns: 1fr;">
          <!-- AQUI SE CARGAN LOS GASTOS -->
        </div>
      </ons-list-item>
    </ons-list>
  </ons-card>
  
  <ons-button class="flatButtonLight" style="margin-bottom: 16px;"
  onclick="resetExpense('${eName}')">REINICIAR</ons-button
  >`;

  let detailDetailExpenseView = document.getElementById(
    "expenseListOfExpenses"
  );
  detailDetailExpenseView.innerHTML = "";

  let expensesDetail = JSON.parse(
    localStorage.getItem("expenseDetailStorage")
  );

  let actualEx = 0;
  if (expensesDetail == null || expensesDetail == "null") {
  } else {
    for (let i = 0; i < expensesDetail.length; i++) {
      if (expensesDetail[i].expenseName == eName) {
        actualEx = 1;
        break;
      }
    }
  }

  if (actualEx == 0) {
    detailDetailExpenseView.innerHTML = `<div style="margin-bottom: 30px;">
      <label class="labelDetailExpense">Nada por mostrar, vas bien con los ahorros...</label>
    </div>`;
  } else {
    for (let i = 0; i < expensesDetail.length; i++) {
      if (expensesDetail[i].expenseName == eName) {
        let iName = expensesDetail[i].inName;
        let iAmount = expensesDetail[i].inAmount;
        let iDate = expensesDetail[i].inDate;
        let iD = expensesDetail[i].inID;

          detailDetailExpenseView.innerHTML +=
          `<ons-list-item expandable style="margin-top: -16px;" modifier="nodivider">
            <div class="center">
              <label class="list-item__title labelDetailExpense">${iName} - $ <span class="labelInfoDetailExpense">${iAmount}</span></label>
              <label class="list-item__subtitle labelDetailExpense" style="padding-top: 0px">${iDate}</label>
            </div>
            <div class="expandable-content" style="grid-template-columns: 1fr 1fr;">

              <ons-button class="moneyButtonDe" style="margin-bottom: 16px; margin-left: 32px; margin-right: 8px; background: var(--flat-button-color); color: var(--flat-button-color-text)" onclick="editDetailExpense('${iD}')" >
                EDITAR
              </ons-button>

              <ons-button class="moneyButtonDe" style="margin-bottom: 16px; margin-left: 8px; margin-right: 32px; background: var(--flat-button-light-color); color: var(--flat-button-light-color-text)" onclick="deleteDetailExpense('${iD}')" >
                ELIMINAR
              </ons-button>

            </div>
          </ons-list-item>`;
      }
    }
  }
}
