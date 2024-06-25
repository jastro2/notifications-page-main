<template>
    <div class="container">
        <div @click="toggleRead()" class="row">
            <div class="col-md-2">
                <h2>{{sample.test}}</h2>
                <h3 class="text-warning">here</h3>
            </div>
            <div class="col-md-10">

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                notificationIsRead: false,
                sample: {
                    test: 'ayooo'
                }
            }
        },
        methods: {
            toggleRead() {
                this.notificationIsRead = !this.notificationIsRead;
            }
        }
    };
</script>