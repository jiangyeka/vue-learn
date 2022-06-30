<template>
    <div>
        <h1>father</h1>
        <h2>
        </h2>
        <div class="container">
            <header>
                <slot name="header"></slot>
            </header>
            <main>
                <slot name="main"></slot>
            </main>
            <footer>
                <slot name="footer"></slot>
            </footer>
        </div>
        <div>
            <h1>scope slot</h1>
            <div>
                <slot :obj="obj">
                    {{ obj.name }}
                </slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Father',
    data() {
        return {

        }
    },

}
</script>

<style>
</style>