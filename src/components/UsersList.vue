<template>  
    <div class="col-md-8 table-responsive table-responsive-sm table-responsive-md table-responsive-lg">
        <table class="table table-bordered table-condensed">
            <thead class="table-primary">
                <tr>
                    <th>Firstname</th>
                    <th class="text-center">Middlename</th>
                    <th class="text-center">Lastname</th>
                    <th class="text-center">Birthdate</th>
                    <th class="text-center">Present Address</th>
                    <th class="text-center">Contact Number</th>
                    <th class="text-center">Email Address</th>
                    <th class="text-center">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td>{{user.firstname}}</td>
                    <td class="text-center">{{ user.middlename }}</td>
                    <td class="text-center">{{ user.lastname }}</td>
                    <td class="text-center">{{ parseDate(user.birthdate) }}</td>
                    <td class="text-center">{{ user.present_address }}</td>
                    <td class="text-center">{{ user.contact_number }}</td>  
                    <td class="text-center">{{ user.email_address }}</td>
                    <td class="text-center">
                        <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true" data-bs-original-title="" title="">Options</button>
                        <div class="dropdown-menu" style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(143px, 229px);" data-popper-placement="bottom-start">
                            <a class="dropdown-item text-primary" href="#" data-bs-original-title="" title="" @click.prevent="setUser(user, user.id)">Edit</a>
                            <a class="dropdown-item text-danger" href="#" data-bs-original-title="" title="" @click.prevent="deleteUser(user.id)">Delte</a>
                        </div>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <th colspan="8" v-if="users.length === 0" class="text-center">No registered users</th>
                </tr>
            </tfoot>
        </table>
    </div>
</template>  

<script>
export default {
    props: {
        users: {
            type: Array,
            required: true
        }
    },
    methods: {
        parseDate(birthdate) {
            birthdate = new Date(birthdate)
            return birthdate.toDateString()
        },
        setUser(user, index) {
        this.$emit('setuser', user, index)
        },
        deleteUser(userID) {
            this.$emit('delete', userID)
        }
    }
};
</script>
<style>
.dropdown-menu li:hover {
    cursor: pointer;
}
.light-text {
    font-weight: normal;
}
</style>