<template>
    <div class="col-md-4">
        <form class="needs-validation" :class="{'was-validated': submitted && !formisValid}">
            <h1 class="text-primary">User Registration</h1>
            <div class="form-group">
                <label class="form-label">Firstname <code class="text-danger">*</code></label> 
                <input type="text" class="form-control" v-model="userData.firstName" required>
                <div v-if="submitted && !formisValid" class="invalid-feedback text-danger"><i class="fa fa-exclamation-triangle"></i> {{ errors.firstName }}</div>
            </div>
            <div class="form-group mt-3">
                <label>Middlename</label> 
                <input class="form-control" type="text" v-model="userData.middleName">
            </div>
            <div class="form-group mt-3">
                <label class="form-label">Lastname <code class="text-danger">*</code></label> 
                <input class="form-control" type="text" v-model="userData.lastName" required>
                <div v-if="submitted && !formisValid" class="invalid-feedback text-danger"><i class="fa fa-exclamation-triangle"></i> {{ errors.lastName }}</div>
            </div>
            <div class="form-group mt-3">
                <label>Birthdate <code class="text-danger">*</code></label> 
                <input class="form-control" type="date" v-model="userData.birthDate" required>
                <div v-if="submitted && !formisValid" class="invalid-feedback text-danger"><i class="fa fa-exclamation-triangle"></i> {{ errors.birthDate }}</div>
            </div>
            <div class="form-group mt-3">
                <label>Present Address <code class="text-danger">*</code></label> 
                <input class="form-control" type="text" v-model="userData.presentAddress" required>
                <div v-if="submitted && !formisValid" class="invalid-feedback text-danger"><i class="fa fa-exclamation-triangle"></i> {{ errors.presentAddress }}</div>
            </div>
            <div class="form-group mt-3">
                <label>Contact Number <code class="text-danger">*</code></label> 
                <input class="form-control" type="text" v-model="userData.contactNumber" required>
                <div v-if="submitted && !formisValid" class="invalid-feedback text-danger"><i class="fa fa-exclamation-triangle"></i> {{ errors.contactNumber }}</div>
            </div>
            <div class="form-group mt-3">
                <label>Email Address <code class="text-danger">*</code></label> 
                <input class="form-control" type="email" v-model="userData.emailAddress" required>
                <div v-if="submitted && !formisValid" class="invalid-feedback text-danger"><i class="fa fa-exclamation-triangle"></i> {{ errors.emailAddress }}</div>
            </div>
            <button type="button" v-if="!isLoading" class="btn btn-primary mt-3 mb-3 form-control" @click.prevent="addUser">
                {{mode ? 'Update' : 'Register'}}
            </button>
            <button type="button" v-else class="btn btn-primary mt-3 mb-3 form-control">
                <i class="fa fa-spin fa-spinner me-2"></i>Loading....
            </button>
        </form>
    </div>
</template>
<script>

export default{
    props: { 
        isLoading : {
            type    : Boolean,
            default : false
        },
        mode : {
            type    : Boolean,
            default : false
        },
        userData:{
            type: Object,
            default: null
        }
    },
    data() {
        return {
            errors : {},
            submitted : false
        }
    },
    computed: {
       formisValid() {
            return Object.keys(this.errors).length === 0
       } 
    },
    methods: {
        addUser() {
            this.submitted = true
            this.errors = {};
            if(!this.userData.firstName){
                this.errors.firstName = 'Firstname is required'
            }
            if(!this.userData.lastName){
                this.errors.lastName = 'Lastname is required'
            }
            if(!this.userData.birthDate){
                this.errors.birthDate = 'Birthdate is required'
            }
            if(!this.userData.presentAddress){
                this.errors.presentAddress = 'Present address is required'
            }
            if(!this.userData.contactNumber){
                this.errors.contactNumber = 'Contact number is required'
            }
            if(!this.userData.emailAddress){
                this.errors.emailAddress = 'Email address is required'
            }else{
                if(!this.isValidEmail(this.userData.emailAddress)){
                    this.errors.emailAddress = 'Invalid email format'
                }
            }

            if(this.formisValid){
                this.$emit('adduser', this.userData)
                this.submitted = false
            }
        },
        isValidEmail(email){
            const emailRegex =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return emailRegex.test(email)
        }
    }
}
</script>