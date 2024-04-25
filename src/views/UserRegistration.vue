<template>
    <div class="container-fluid ps-5 pe-5 pt-5 pb-5">
        <div class="row justify-content-center">
            <UserRegistrationForm 
                :isLoading="isLoading"
                :mode="updateMode"
                :userData="userData"
                @adduser="addUser" />
            <UsersList :users="usersList" @setuser="setUser" @delete="deleteUser" />
        </div>
    </div>
</template>
<script>

import UserRegistrationForm from '@/components/UserRegistrationForm.vue'
import UsersList from '@/components/UsersList.vue'
import axios from '../axios'

    export default {
        components: {
            UserRegistrationForm,
            UsersList
        },
        mounted (){
            this.getUsers()
        },
        data() {

            return {
                usersList       : [],
                userData : {
                    firstName       : '',
                    middleName      : '',
                    lastName        : '',
                    birthDate       : '',
                    presentAddress  : '',
                    contactNumber   : '',
                    emailAddress    : ''
                },
                isLoading       : false,
                updateMode      : false,
                userID          : null,
            }
            
        },
        methods: {
            async getUsers() {
                try{
                    await axios.get('get_users').then(response=>{
                        this.usersList = response.data
                    }).catch(error=>{
                        console.log(error)
                    })
                }catch(error){
                    console.log(error)
                }
            },
            async updateUser(userData) {
                await axios.put(`update_user/${this.userID}`,this.usertoJSON(userData)).then(response=>{
                    alert(response.data.message);
                    this.getUsers()
                    this.resetFields()
                }).catch(error=>{
                    console.log(error)
                    this.resetFields()
                })
            },
            async saveUser(userData) {
                await axios.post('users',this.usertoJSON(userData)).then(response=>{
                    alert(response.data.message);
                    this.getUsers()
                    this.resetFields()
                }).catch(error=>{
                    console.log(error)
                })
            },
            async addUser(userData) {
                this.isLoading = true
                if(this.updateMode === true){
                    this.updateUser(userData)
                }else{
                    this.saveUser(userData)
                }
            },
            async resetFields(){
                this.userData = {
                    firstName       : '',
                    middleName      : '',
                    lastName        : '',
                    birthDate       : '',
                    presentAddress  : '',
                    contactNumber   : '',
                    emailAddress    : ''
                },
                this.isLoading   = false
                this.updateMode  = false
                this.userID      = null
            },
            async setUser(user, user_id) {

                this.userID = user_id
                this.userData = {
                    firstName      : user.firstname,
                    middleName     : user.middlename,
                    lastName       : user.lastname,
                    birthDate      : new Date(user.birthdate).toISOString().slice(0, 10),
                    presentAddress : user.present_address,
                    contactNumber  : user.contact_number,
                    emailAddress   : user.email_address 
                }
                this.updateMode     = true
            },
            async deleteUser(userID){
                let prompt = confirm("Are you sure you want to delete this user?")
                if(prompt){
                    this.userID = userID
                    await axios.delete(`delete_user/${this.userID}`)
                    .then(response=>{
                        alert(response.data.message);
                        this.getUsers()
                    }).catch(error=>{
                        console.log(error)
                    })  
                }
            },
            usertoJSON(userData){
                return {
                    firstname           : userData.firstName,
                    middlename          : userData.middleName,
                    lastname            : userData.lastName,
                    birthdate           : userData.birthDate,
                    present_address     : userData.presentAddress,
                    contact_number      : userData.contactNumber,
                    email_address       : userData.emailAddress
                }
            }
        }
    }
    
</script>
<style>
input{
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
}
</style>

  