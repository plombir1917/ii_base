<template>
  <div class="body">
    <section class="container">
      <div>
        <b-form @submit="onSubmit">
          <b-form-group
            id="input-group-1"
            label="Ваше правило:"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model="form.rule"
              type="text"
              placeholder="Правило"
              required
            ></b-form-input>
          </b-form-group>

          <div class="buttons">
            <b-button @click.prevent="onSubmit()" variant="primary"
              >Принять</b-button
            >
            <b-button type="reset" variant="outline-primary">Отменить</b-button>
          </div>
        </b-form>
      </div>
      <div v-if="items != ''">
        <b-table
          :items="items"
          :fields="fields"
          striped
          responsive="sm"
          class="table"
        >
        </b-table>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  asyncData() {
    return {
      items: [],
      concept: {
        rule: '',
        base: '',
      },
    }
  },
  data() {
    return {
      fields: [{ key: 'rule', variant: 'primary' }],
      form: {
        rule: '',
      },
    }
  },
  methods: {
    onSubmit() {
      this.items.push(this.form)
      this.form = {
        rule: '',
      }
    },
  },
}
</script>
<style scoped>
.buttons {
  text-align: center;
  margin-bottom: 2vh;
}
.header {
  text-align: center;
}
.header-name {
  color: cornflowerblue;
  text-align: center;
}
</style>
