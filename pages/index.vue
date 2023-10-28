<template>
  <div class="body">
    <section class="container">
      <h1 class="header">
        Система организации правильного питания
        <hr />
        <strong class="header-name"> "Культурист" </strong>
      </h1>
      <div>
        <b-nav-text
          >Нормы калорий зависят от многих факторов, таких как возраст, пол,
          рост, вес, уровень физической активности и состояние здоровья. Для
          того, чтобы вычислить норму калорий, необходимо определить свой
          уровень активности. Есть пять основных уровней физической активности:
          Минимальный уровень активности: сидячая работа и очень мало физической
          нагрузки в течение дня. Низкий уровень активности: умеренная
          активность, связанная с рабочим процессом, и легкие упражнения 1-2
          раза в неделю. Средний уровень активности: умеренные тренировки 3-5
          раз в неделю или повышенная физическая активность в течение рабочего
          дня. Высокий уровень активности: интенсивные тренировки 6-7 раз в
          неделю или физическая работа. Очень высокий уровень активности:
          физическое напряжение, связанное с профессиональными занятиями спортом
          или интенсивной работой.</b-nav-text
        >
        <b-form @submit="onSubmit">
          <b-form-group id="input-group-1" label="Ваш вес:" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="form.weight"
              type="text"
              placeholder="Введите вес"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-2"
            label="Ваш рост:"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              v-model="form.tall"
              placeholder="Введите рост"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-2"
            label="Ваш возраст:"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              v-model="form.age"
              placeholder="Введите возраст"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-2"
            label="Ваша активность:"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              v-model="form.activity"
              placeholder="Введите ваш уровень активности"
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
          <template #cell(show_details)="row">
            <b-button size="sm" @click="row.toggleDetails" class="mr-2">
              {{ row.detailsShowing ? 'Спрятать' : 'Показать' }} питание
            </b-button>
          </template>
          <template #row-details="row">
            <b-card>
              <b-row class="mb-2">
                <b-col sm="3" class="text-sm-right"><b>Завтрак:</b></b-col>
                <b-col>{{ eat.breakfast }} ккал</b-col>
              </b-row>

              <b-row class="mb-2">
                <b-col sm="3" class="text-sm-right"><b>Обед:</b></b-col>
                <b-col>{{ eat.lunch }} ккал</b-col>
              </b-row>

              <b-row class="mb-2">
                <b-col sm="3" class="text-sm-right"><b>Ужин:</b></b-col>
                <b-col>{{ eat.dinner }} ккал</b-col>
              </b-row>

              <b-button size="sm" @click="row.toggleDetails">Свернуть</b-button>
            </b-card>
          </template>
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
      eat: {
        breakfast: '',
        lunch: '',
        dinner: '',
      },
    }
  },
  data() {
    return {
      fields: [
        { key: 'weight', sortable: true, variant: 'primary' },
        { key: 'tall', sortable: true, variant: 'primary' },
        { key: 'age', sortable: true, variant: 'primary' },
        { key: 'activity', sortable: true, variant: 'primary' },
        { key: 'calories', sortable: true, variant: 'primary' },
        'show_details',
      ],
      form: {
        weight: '',
        tall: '',
        age: '',
        activity: '',
        calories: '',
      },
    }
  },
  methods: {
    onSubmit() {
      this.form.calories =
        66 +
        13.7 * this.form.weight +
        5 * this.form.tall -
        6.8 * this.form.age * this.form.activity
      this.items.push(this.form)
      this.eat.breakfast = this.form.calories * (35 / 100)
      this.eat.lunch = this.form.calories * (45 / 100)
      this.eat.dinner = this.form.calories * (20 / 100)
      this.form = {
        weight: '',
        tall: '',
        age: '',
        activity: '',
        calories: '',
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
