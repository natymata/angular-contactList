angular.module('BDServices')
	.service("BDService", function(){

		var contacts= angular.fromJson(localStorage.getItem("contacts")) || [];

		var getId= function () {
			var id= Number(localStorage.getItem("contactIdCount")) || 1;
			return id;
		};

		var  saveContact= function (contactObject) {
				contactObject.id= getId();
				contacts.push(contactObject);
				updateStorage();
				updateId();
		};

		var  editContact= function (contactObject, pId) {
				contactObject.id= pId;
				contacts.push(contactObject);
				updateStorage();
		};

		var updateStorage= function(){
			localStorage.setItem('contacts', JSON.stringify(contacts));
		};//fin function

		var updateId= function () {
			var newId= (getId())+1;
			localStorage.setItem("contactIdCount", newId);
		}

		var deleteContact= function(contact){
			var index= contacts.indexOf(contact);
			contacts.splice(index, 1);
			updateStorage();
			return getAll();
		}//fin function

		var getAll= function(){
			return contacts;
		};

		return{
			getAll: getAll,
			saveContact: saveContact,
			deleteContact: deleteContact,
			editContact: editContact
		}
	});