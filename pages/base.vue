<template>
  <div class="body">
    <section class="container">
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
      <div>
        <b-form @submit="onSubmit">
          <b-form-group id="input-group-1" label="Ваш СЕО:" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="form.ceo"
              type="text"
              placeholder="Продюсер"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-1" label="Ваш AR:" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="form.ar"
              type="text"
              placeholder="AR отдел, или отдел поиска новых исполнителей"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-1" label="Ваш KO:" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="form.ko"
              type="text"
              placeholder="Коммерческий отдел"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-1" label="Ваш ЮО:" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="form.yo"
              type="text"
              placeholder=" Юридический отдел"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-1" label="Ваш M:" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="form.m"
              type="text"
              placeholder=" Маркетинг"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-1" label="Ваш ОП:" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="form.op"
              type="text"
              placeholder="Отдел продвижения артиста"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-1" label="Ваш СО:" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="form.co"
              type="text"
              placeholder="Связи с общественностью"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-1" label="Ваш ОР:" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="form.or"
              type="text"
              placeholder="Отдел развития исполнителей"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-1" label="Ваш Д:" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="form.d"
              type="text"
              placeholder="Дизайнер"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-1" label="Ваш И:" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="form.i"
              type="text"
              placeholder="Исполнитель"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-1" label="Ваш П:" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="form.p"
              type="text"
              placeholder="Продажи"
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
    </section>
  </div>
</template>

<script>
export default {
  asyncData() {
    return {
      items: [
        {
          base: ' (СЕО(не принимает решения), AR(не ведёт поиск), ЮО(необслуживает), OР(не работает), ОП(не организует), СК(не договаривается), Д(не проектирует), КО(не анализирует), М(не продвигает), И(не создает), СО(не ведёт), П(не отвечает), ~Н(СЕО, АR), ~Д(AR, И), ~С(П, AR), ~ЗИ(ЮО, И), ~ЗП(ЮО,СЕО), ~ОЗ(ОР,И), ~К(ОП, И), ~Б(СК, И), ~РД(ОР, Д), ~Р(ОР, ОП), ~СС(СО,М), ~СП(ОР, И), ~ПРОД(П, И), ~О(КО, П), ~П(СЕО, П)).',
        },
      ],

      concept: {
        base: '',
      },
    }
  },
  data() {
    return {
      fields: [
        { key: 'base', variant: 'primary' },
        { key: 'rule', variant: 'primary' },
      ],
      form: {
        ceo: '',
        ar: '',
        ko: '',
        yo: '',
        m: '',
        op: '',
        co: '',
        or: '',
        d: '',
        i: '',
        p: '',
      },
    }
  },
  methods: {
    onSubmit() {
      if (this.form) {
        if (this.form.ceo) {
          this.concept.base = `(СЕО(${this.form.ceo}), AR(не ведёт поиск), ЮО(не обслуживает), OР(не работает), ОП(не организует), СК(не договаривается) Д(не проектирует), КО(не анализирует), М(не продвигает), И(не создает), СО(не ведёт), П(не отвечает), Н(СЕО, АR), ~Д(AR, И), ~С(П, AR), ~ЗИ(ЮО, И), ~ЗП(ЮО,СЕО), ~ОЗ(ОР,И), ~К(ОП, И), ~Б(СК, И),  ~РД(ОР, Д), ~Р(ОР, ОП), ~СС(СО,М) ~СП(ОР, И), ~ПРОД(П, И), ~О(КО, П), ~П(СЕО, П)).`
          this.concept.rule = `ЕСЛИ СЕО(не работает) И ~Н(П,AR) ТО СЕО(${this.form.ceo}) И Н(П,AR)`
          this.items = this.items.map((item) => this.concept)
        } else if (this.form.ar) {
          this.concept.base = `(СЕО(работает), AR(${this.form.ar}), ЮО(не обслуживает), OР(не работает), ОП(не организует), СК(не договаривается) Д(не проектирует), КО(не анализирует), М(не продвигает), И(не создает), СО(не ведёт), П(не отвечает), Н(СЕО, АR), Д(AR, И), ~С(П, AR), ~ЗИ(ЮО, И), ~ЗП(ЮО,СЕО), ~ОЗ(ОР,И), ~К(ОП, И), ~Б(СК, И),  ~РД(ОР, Д), ~Р(ОР, ОП), ~СС(СО,М) ~СП(ОР, И), ~ПРОД(П, И), ~О(КО, П), ~П(СЕО, П)).`
          this.concept.rule = `ЕСЛИ AR(не работает) И ~Д(AR, И) ТО AR(${this.form.ar}) И Д(AR, И)`
          this.items = this.items.map((item) => this.concept)
        } else if (this.form.ko) {
          this.concept.base = `СЕО(работает), AR(работает), ЮО(не обслуживает), OР(не работает), ОП(не организует), СК(не договаривается) Д(не проектирует), КО(${this.form.ko}), М(не продвигает), И(не создает), СО(не ведёт), П(не отвечает), Н(СЕО, АR), Д(AR, И), ~С(П, AR), ~ЗИ(ЮО, И), ~ЗП(ЮО,СЕО), ~ОЗ(ОР,И), ~К(ОП, И), ~Б(СК, И),  ~РД(ОР, Д), ~Р(ОР, ОП), ~СС(СО,М) ~СП(ОР, И), ~ПРОД(П, И), О(КО, П), ~П(СЕО, П)).`
          this.concept.rule = `ЕСЛИ KO(не работает) И ~O(KO, П) ТО KO(${this.form.ko}) И О(КО, П)`
          this.items = this.items.map((item) => this.concept)
        } else if (this.form.yo) {
          this.concept.base = `СЕО(работает), AR(работает), ЮО(${this.form.yo}), OР(не работает), ОП(не организует), СК(не договаривается) Д(не проектирует), КО(анализирует), М(не продвигает), И(не создает), СО(не ведёт), П(не отвечает), Н(СЕО, АR), Д(AR, И), ~С(П, AR), ЗИ(ЮО, И), ЗП(ЮО,СЕО), ~ОЗ(ОР,И), ~К(ОП, И), ~Б(СК, И),  ~РД(ОР, Д), ~Р(ОР, ОП), ~СС(СО,М) ~СП(ОР, И), ~ПРОД(П, И), О(КО, П), ~П(СЕО, П)).`
          this.concept.rule = `ЕСЛИ ЮО(не работает) И ~ЗИ(ЮО, И) ТО KO(${this.form.yo}) И ЗИ(ЮО, И)`
          this.items = this.items.map((item) => this.concept)
        } else if (this.form.m) {
          this.concept.base = `СЕО(работает), AR(работает), ЮО(работает), OР(не работает), ОП(не организует), СК(не договаривается) Д(не проектирует), КО(анализирует), М(${this.form.m}), И(не создает), СО(не ведёт), П(не отвечает), Н(СЕО, АR), Д(AR, И), ~С(П, AR), ЗИ(ЮО, И), ЗП(ЮО,СЕО), ~ОЗ(ОР,И), ~К(ОП, И), ~Б(СК, И),  ~РД(ОР, Д), ~Р(ОР, ОП), СС(СО,М) ~СП(ОР, И), ~ПРОД(П, И), О(КО, П), ~П(СЕО, П)).`
          this.concept.rule = `ЕСЛИ М(не работает) И ~СС(СО, М) ТО М(${this.form.m}) И СС(СО, М)`
          this.items = this.items.map((item) => this.concept)
        } else if (this.form.op) {
          this.concept.base = `СЕО(работает), AR(работает), ЮО(работает), OР(не работает), ОП(${this.form.op}), СК(не договаривается) Д(не проектирует), КО(анализирует), М(работает), И(не создает), СО(не ведёт), П(не отвечает), Н(СЕО, АR), Д(AR, И), ~С(П, AR), ЗИ(ЮО, И), ЗП(ЮО,СЕО), ~ОЗ(ОР,И), ~К(ОП, И), ~Б(СК, И),  ~РД(ОР, Д), Р(ОР, ОП), СС(СО,М) ~СП(ОР, И), ~ПРОД(П, И), О(КО, П), ~П(СЕО, П)).`
          this.concept.rule = `ЕСЛИ ОП(не работает) И ~Р(ОР, ОП) ТО ОП(${this.form.op}) И Р(ОР, ОП)`
          this.items = this.items.map((item) => this.concept)
        } else if (this.form.co) {
          this.concept.base = `СЕО(работает), AR(работает), ЮО(работает), OР(не работает), ОП(работает), СК(не договаривается) Д(не проектирует), КО(анализирует), М(работает), И(не создает), СО(${this.form.co}), П(не отвечает), Н(СЕО, АR), Д(AR, И), ~С(П, AR), ЗИ(ЮО, И), ЗП(ЮО,СЕО), ~ОЗ(ОР,И), ~К(ОП, И), ~Б(СК, И),  ~РД(ОР, Д), Р(ОР, ОП), СС(СО,М) ~СП(ОР, И), ~ПРОД(П, И), О(КО, П), ~П(СЕО, П)).`
          this.concept.rule = `ЕСЛИ СО(не работает) И ~СС(СО, М) ТО СО(${this.form.co}) И СС(СО, М)`
          this.items = this.items.map((item) => this.concept)
        } else if (this.form.or) {
          this.concept.base = `СЕО(работает), AR(работает), ЮО(работает), OР(${this.form.or}), ОП(работает), СК(не договаривается) Д(не проектирует), КО(анализирует), М(работает), И(не создает), СО(работает), П(не отвечает), Н(СЕО, АR), Д(AR, И), ~С(П, AR), ЗИ(ЮО, И), ЗП(ЮО,СЕО), ОЗ(ОР,И), ~К(ОП, И), ~Б(СК, И), РД(ОР, Д), Р(ОР, ОП), СС(СО,М) СП(ОР, И), ~ПРОД(П, И), О(КО, П), ~П(СЕО, П)).`
          this.concept.rule = `ЕСЛИ ОР(не работает) И ~ОЗ(ОР, И) И ~РД(ОР, Д) И ~СП(ОР, И) ТО ОР(${this.form.or}) И ОЗ(ОР, И) И РД(ОР, Д) И СП(ОР, И)`
          this.items = this.items.map((item) => this.concept)
        } else if (this.form.d) {
          this.concept.base = `СЕО(работает), AR(работает), ЮО(работает), OР(работает), ОП(работает), СК(работает) Д(${this.form.d}), КО(анализирует), М(работает), И(не создает), СО(работает), П(не отвечает), Н(СЕО, АR), Д(AR, И), ~С(П, AR), ЗИ(ЮО, И), ЗП(ЮО,СЕО), ОЗ(ОР,И), ~К(ОП, И), ~Б(СК, И), РД(ОР, Д), Р(ОР, ОП), СС(СО,М) СП(ОР, И), ~ПРОД(П, И), О(КО, П), ~П(СЕО, П)).`
          this.concept.rule = `ЕСЛИ Д(не работает) И ~РД(ОР, Д) ТО Д(${this.form.d}) И РД(ОР, Д)`
          this.items = this.items.map((item) => this.concept)
        } else if (this.form.i) {
          this.concept.base = `СЕО(работает), AR(работает), ЮО(работает), OР(работает), ОП(работает), СК(работает) Д(работает), КО(анализирует), М(работает), И(${this.form.i}), СО(работает), П(не отвечает), Н(СЕО, АR), Д(AR, И), ~С(П, AR), ЗИ(ЮО, И), ЗП(ЮО,СЕО), ОЗ(ОР,И), К(ОП, И), Б(СК, И), РД(ОР, Д), Р(ОР, ОП), СС(СО,М) СП(ОР, И), ~ПРОД(П, И), О(КО, П), ~П(СЕО, П)).`
          this.concept.rule = `ЕСЛИ И(не работает) И ~К(ОП, И), ~Б(СК, И) ТО И(${this.form.i}) И К(ОП, И), Б(СК, И)`
          this.items = this.items.map((item) => this.concept)
        } else if (this.form.p) {
          this.concept.base = `СЕО(работает), AR(работает), ЮО(работает), OР(работает), ОП(работает), СК(работает) Д(работает), КО(анализирует), М(работает), И(работает), СО(работает), П(${this.form.p}), Н(СЕО, АR), Д(AR, И), С(П, AR), ЗИ(ЮО, И), ЗП(ЮО,СЕО), ОЗ(ОР,И), К(ОП, И), Б(СК, И), РД(ОР, Д), Р(ОР, ОП), СС(СО,М) СП(ОР, И), ПРОД(П, И), О(КО, П), П(СЕО, П)).`
          this.concept.rule = `ЕСЛИ П(не работает) И ~С(П, AR) ТО П(${this.form.p}) И С(П, AR)`
          this.items = this.items.map((item) => this.concept)
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
