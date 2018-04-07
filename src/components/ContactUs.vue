<template>
  <div>
    <h1 class="page-title">{{ $t('contactUs.title') }}</h1> 
    <div class="center-contents">
      <div id="contact-us" class="body md-layout" >
        <form class="md-layout-item md-size-50 md-small-size-100" novalidate  @submit.prevent="sendEmail">
          <md-card >
            <md-card-header>
              <div class="md-title">{{ $t('contactUs.emailContact') }}</div>
            </md-card-header>

            <md-card-content>
              <div class="md-layout md-gutter">
                <div class="md-layout-item md-small-size-100">
                  <md-field :class="getValidationClass('personName')">
                    <label for="person-name">{{ $t('contactUs.personName') }}</label>
                    <md-input name="person-name" id="person-name" 
                      autocomplete="given-name" v-model="form.personName"
                      :disabled="sending" required
                    />
                    <span class="md-error" v-if="!$v.form.personName.required">{{ $t('contactUs.noti.required.personName') }}</span>
                    <span class="md-error" v-else-if="!$v.form.personName.minlength">{{ $t('contactUs.noti.invalid.personName') }}</span>
                  </md-field>
                </div>

                <div class="md-layout-item md-small-size-100">
                  <md-field :class="getValidationClass('companyName')">
                    <label for="company-name">{{ $t('contactUs.companyName') }}</label>
                    <md-input name="company-name" id="company-name" 
                      autocomplete="family-name" v-model="form.companyName" 
                      :disabled="sending" required
                    />
                    <span class="md-error" v-if="!$v.form.companyName.required">{{ $t('contactUs.noti.required.companyName') }}</span>
                    <span class="md-error" v-else-if="!$v.form.companyName.minlength">{{ $t('contactUs.noti.invalid.companyName') }}</span>
                  </md-field>
                </div>
              </div>

              <md-field :class="getValidationClass('email')">
                <label for="email">{{ $t('contactUs.email') }}</label>
                <md-input type="email" name="email" id="email" 
                  autocomplete="email" v-model="form.email" 
                  :disabled="sending" required
                />
                <span class="md-error" v-if="!$v.form.email.required">{{ $t('contactUs.noti.required.email') }}</span>
                <span class="md-error" v-else-if="!$v.form.email.email">{{ $t('contactUs.noti.invalid.email') }}</span>
              </md-field>

              <md-field :class="getValidationClass('contactNumber')">
                <label for="contact-number">{{ $t('contactUs.contactNumber') }}</label>
                <md-input name="contact-number" id="contact-number" 
                  autocomplete="contact-number" v-model="form.contactNumber"
                  :disabled="sending"
                />
              </md-field>
              
              <md-field :class="getValidationClass('topic')">
                <label for="movies">{{ $t('contactUs.areasOfService.title') }}</label>
                <md-select v-model="form.areasOfSupport" name="areasOfSupport" id="areasOfSupport" multiple>
                  <md-option value="견적문의">{{ $t('contactUs.areasOfService.inquiry') }}</md-option>
                  <md-option value="파트너쉽">{{ $t('contactUs.areasOfService.partnership') }}</md-option>
                  <md-option value="하네스">{{ $t('contactUs.areasOfService.harness') }}</md-option>
                  <md-option value="diakont">{{ $t('contactUs.areasOfService.diakont') }}</md-option>
                  <md-option value="eTec">{{ $t('contactUs.areasOfService.eTec') }}</md-option>
                  <md-option value="glentek">{{ $t('contactUs.areasOfService.glentek') }}</md-option>
                  <md-option value="기타">{{ $t('contactUs.areasOfService.etc') }}</md-option>
                </md-select>
              </md-field>
              
              <md-field :class="getValidationClass('message')">
                <label>{{ $t('contactUs.body.title') }}</label>
                <md-textarea v-model="form.message" required></md-textarea>
                <span class="md-error" v-if="!$v.form.message.required">{{ $t('contactUs.noti.required.message') }}</span>
              </md-field>

            </md-card-content>

            <md-progress-bar md-mode="indeterminate" v-if="sending" />
            
            <md-card-actions>
              <vue-recaptcha sitekey="6Le87E4UAAAAADtJ0Kiku6cxj0awVxZQRJK6pd51">
                <md-button type="submit" class="md-primary" :disabled="sending">{{ $t('contactUs.submit') }}</md-button>
              </vue-recaptcha>
            </md-card-actions>
          </md-card>

          <md-snackbar md-position="left" md-duration="3000" md-persistent :md-active.sync="emailSent" >
            <span>{{ $t('contactUs.noti.success') }}</span>
          </md-snackbar>
        </form>

        <md-card class="md-layout-item md-size-50 md-small-size-100">
          <md-card-header>
            <div class="md-title">{{ $t('contactUs.addressContact') }}</div>
          </md-card-header>
          <md-card-content>
            <gmap-map
              :center="{lat:37.4722813, lng:126.885846}"
              :zoom="17"
              style="width: 100%; height: 300px"
            >
              <gmap-marker
                :position="{lat:37.4722813, lng:126.885846}"
                :clickable="true"
                :draggable="false"
              ></gmap-marker>
            </gmap-map>
            <p class="chois-address-contact-info">
              <span>{{ $t('contactUs.info.address') }}</span><br>				
              <span>{{ $t('contactUs.info.message') }}</span><br>
              <span>{{ $t('contactUs.info.email') }}</span><br>		
              <span><a href="tel: +827046801052">{{ $t('contactUs.info.tel') }}</a></span><br>
              <span>{{ $t('contactUs.info.fax') }}</span><br>
            </p>
          </md-card-content>
        </md-card>
      </div>
    </div>      
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import {
  required,
  email,
  minLength,
  maxLength
} from 'vuelidate/lib/validators'
import VueRecaptcha from 'vue-recaptcha'
import axios from 'axios'



export default {
  name: 'ContactUs',
  components: { VueRecaptcha },
  mixins: [validationMixin],

  data(){
    return {
      form: {
        personName: null,
        companyName: null,
        email: null,
        contactNumber: null,
        message: null,
        areasOfSupport: null
      },
      sending: false,
      emailSent: false,
      }
  },
  validations: {
    form: {
      personName: {
        required,
        minLength: minLength(3)
      },
      companyName: {
        required,
        minLength: minLength(1)
      },
      email: {
        required,
        email
      },
      message: {
        required
      }
    }
  },
  methods: {
    getValidationClass (fieldName) {
      const field = this.$v.form[fieldName]

      if (field) {
        return {
          'md-invalid': field.$invalid && field.$dirty
        }
      }
    },
    sendEmail () {
      const vm = this;
      vm.$v.$touch()
      let info = this.$data.form
      let emailHTMLbody = `<br><h3>[성명]: ${info.personName} [회사명]: ${info.companyName}</h3><br><h3>[이메일]: ${info.email} [전화번호]: ${info.contactNumber}</h3><br><h3>[문의주제]: ${JSON.stringify(info.areasOfSupport)} </h3><br><h5>[문의내용]</h5><br><p>${info.message}</p><br>`
      console.log(emailHTMLbody);
      
      if (!vm.$v.$invalid) {

        var myHeaders = new Headers();

        myHeaders.append('Content-Type', 'application/json');
        myHeaders.append('Accept', 'application/json');

        fetch('https://ydip3e0715.execute-api.ap-northeast-2.amazonaws.com/prod/contact-us', {
          method: "POST",
          mode: 'cors',
          headers: myHeaders,
          body: JSON.stringify({
            "message": emailHTMLbody
          }),
          
        })
        .then(response => {
          //send notification
          console.log(response);
          vm.$data.emailSent = true;
          //redirect to home
          // vm.$router.push('/');
        })
        .catch( e => {
          //send notification
          vm.$data.emailSent = false;
          this.errors.push(e);
          vm.$router.push('/contact-us');
        });
      }
    }
  },
  watch: {
    '$route'(to, from) {
      // Call resizePreserveCenter() on all maps
      this.$gmapDefaultResizeBus.$emit('resize')
    }
  }
}
</script>

<style>
.md-error {
  color: red;
}
.md-title{
  text-align: center;
}
.chois-address-contact-info {
  user-select: text;
  -webkit-user-select: text;
  -moz-user-select: text;
  font-size: 17px;
  line-height: 26px;
}
</style>
