<template>
  <section class="container">
    <h1>Журнал обращений</h1>
    <div>
      <b-form @submit="onSubmit">
        <b-form-group
          id="input-group-1"
          label="Ваша проблема:"
          label-for="input-1"
          description="Пожалуйста, опишите ваш вопрос как можно подробнее."
        >
          <b-form-input
            id="input-1"
            v-model="form.problem"
            type="text"
            placeholder="Введите проблему"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Ваше имя:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.name"
            placeholder="Введите имя"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Дата:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.date"
            placeholder="Введите дату"
            required
          ></b-form-input>
        </b-form-group>

        <b-button @click.prevent="onSubmit()" variant="primary"
          >Принять</b-button
        >
        <b-button type="reset" variant="danger">Отменить</b-button>
      </b-form>
    </div>
    <div>
      <b-table :items="items" :fields="fields" striped responsive="sm">
        <template #cell(status)="text">
          <b-form-input
            :type="text"
            placeholder="Оставьте статус проблемы здесь"
          >
          </b-form-input>
        </template>
      </b-table>
    </div>
  </section>
</template>

<script>
export default {
  asyncData() {
    return {
      items: [],
    }
  },
  data() {
    return {
      fields: ['problem', 'name', 'date', 'status'],
      form: {
        problem: '',
        name: '',
        date: null,
        status: '',
      },
    }
  },
  methods: {
    onSubmit() {
      this.items.push(this.form)
      this.form = {
        problem: '',
        name: '',
        date: null,
      }
    },
  },
}
</script>
