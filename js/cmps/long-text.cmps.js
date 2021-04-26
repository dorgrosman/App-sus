export default {
    props: ['txt'],
    template: `
    <section class="long-text">   
        <p>{{subTxt}}</p>

        <button class="read-more-btn" v-if="largeTxt" @click="toggleShowMore">more...</button>
    </section>

    `,
    data() {
        return {
            isShowMore: false,
            largeTxt: false
        }
    },
    methods: {
        toggleShowMore() {
            this.isShowMore = !this.isShowMore;
        }
    },
    computed: {
        subTxt() {
            if (this.txt.length > 150) {
                this.largeTxt = true
            }
            if (this.isShowMore) {
                return this.txt;
            }
            return this.txt.substring(0, 100);
        }
    },
}