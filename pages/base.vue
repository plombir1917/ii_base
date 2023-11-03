<template>
  <div class="body">
    <section class="container">
      <div>
        <b-form @submit="onSubmit">
          <b-form-group id="input-group-1" label="Ваш СЕО:" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="form.ceo"
              type="text"
              placeholder="СЕО"
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
        ceo: '',
      },
    }
  },
  methods: {
    onSubmit() {
      if (this.form) {
        if (this.form.ceo) {
          this.concept.rule = `ЕСЛИ З(отсутствует) И ~С(З,Р) ТО З(${this.form.ceo}) И С(З,Р)`
          this.items.push(this.concept)
        } else {
          throw new BadRequestException('Ошибка')
        }
      }
      this.form = {
        ceo: '',
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
