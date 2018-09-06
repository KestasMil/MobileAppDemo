<template>
    <div>
        <div class="header">{{ title }}</div>
        <div class="spacer"></div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    props: ['title'],
    data() {
        return {
            
        }
    },
    created() {

    }
}
</script>

<style scoped>
.header {
    text-align: center;
    line-height: 1em;
    font-size: 1em;
    padding: 10px;
    margin-bottom: 2px;
    position: fixed;
    width: 100vw;
    background-color: rgb(255, 255, 255);
    box-shadow: 0px 2px 5px 0px rgba(184,184,184,1);
}
.spacer {
    height: calc(1em + 20px);
}
</style>