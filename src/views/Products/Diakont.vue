<template>
  <div>
    <h1 class="page-title">{{ $t('diakont.title') }}</h1> 
    <div class="center-contents">
      <div :id="supplier.name" class="body">
        <div class="supplier-info md-layout md-alignment-center md-gutter">
          <div class="md-layout-item md-large-size-25 md-medium-size-25 md-small-size-30 md-xsmall-size-100 supplier-logo-area" :id="supplier.name +'-logo-area'">
            <img src="@/assets/diakont-logo.png" :alt="supplier.name+'-logo'" :class="supplier.name+ '-logo-image'">
          </div>
          <div class="md-layout-item md-large-size-75 md-medium-size-75 md-small-size-70 md-xsmall-size-100 supplier-intro">
            <p class="supplier-intro-paragraph">
               {{ $t('diakont.supplierIntro') }}
            </p>
          </div>
        </div>
        <div class="supplier-website-link" :id="supplier.name+'-website-link'">
          <a :href="supplier.url" target="_blank"> &rarr; {{$t('visitWebsite')}}</a>
        </div>
        <div class="supplier-intro-area">
          <img src="@/assets/diakont-banner.png" :alt="supplier.name+'-banner'" :class="supplier.name+ '-intro-image'">
        </div>
        
        <vue-tabs>

          <v-tab :title="$t('diakont.overview.title')">
            <h3>{{ $t('diakont.overview.lifetime.title') }}</h3>
            <div class="overview-section-area md-layout md-gutter md-alignment-center" id="overview-lifetime">
              <div class="overview-section-img-area md-layout-item md-medium-size-50 md-small-size-50 md-xsmall-size-100" id="overview-lifetime">
                <img class="overview-section-image" src="http://diakont.com/ck_images/1475688978.jpg" alt="product-lifetime-image">
              </div>
              <div class="overview-section-description md-layout-item md-medium-size-50 md-small-size-50 md-xsmall-size-100" id="overview-lifetime">
                {{ $t('diakont.overview.lifetime.description') }}
              </div>
            </div>

            <h3>{{ $t('diakont.overview.performance.title') }}</h3>
            <div class="overview-section-area md-layout md-gutter md-alignment-center" id="overview-performance">
              <div class="overview-section-description md-layout-item md-medium-size-50 md-small-size-50 md-xsmall-size-100" id="overview-performance">
                  {{$t('diakont.overview.performance.description')}}
              </div>
              <div class="overview-section-img-area md-layout-item md-medium-size-50 md-small-size-50 md-xsmall-size-100" id="overview-performance">
                <img class="overview-section-image" src="http://www.diakont.com/ck_images/1469106946.jpg" alt="performance-image">
              </div>
            </div>

            <h3>{{$t('diakont.overview.installation.title')}}</h3>
            <div class="overview-section-area md-layout md-gutter md-alignment-center" id="overview-installation">
              <div class="overview-section-img-area md-layout-item md-medium-size-50 md-small-size-50 md-xsmall-size-100" id="overview-installation">
                <img class="install-image" src="http://www.diakont.com/ck_images/1472669138.jpg" alt="install-image-area">
              </div>
              <div class="overview-section-description md-layout-item md-medium-size-50 md-small-size-50 md-xsmall-size-100" id="overview-installation">
                  {{$t('diakont.overview.installation.description')}}
              </div>
            </div>
          </v-tab>
      
          <v-tab :title="$t('diakont.performanceVideo.title')">
            <h3>{{$t('diakont.performanceVideo.title')}}</h3>
            <div class="performance-video-area">
              <video class="performance-video" height="405" poster="" width="720">
                <source src="http://diakont.com/pdf/Diakont_roller_screw_actuators_2015.mp4" type="video/mp4">
              </video>
            </div>
          </v-tab>
      
          <v-tab :title="$t('diakont.specifications.title')">
            <h3>{{$t('diakont.specifications.title')}}</h3>
            <p>{{$t('diakont.specifications.instruction')}}</p>
            <vue-good-table
              title=""
              :columns="columns"
              :rows="rows"
              :defaultSortBy="{field: 'model', type: 'asc'}"
              responsive
            />
          </v-tab>
      
          <v-tab :title="$t('diakont.testing.title')">
            <h3>{{$t('diakont.testing.title')}}</h3>
            <h4>{{$t('diakont.testing.performanceLifetime')}}</h4>
            <p>
              {{$t('diakont.testing.description')}}
            </p>

            <div class="test-result-table">
              <div class="test-result-item">
                <div class="test-result description">
                  <h5>DA67</h5>
                  <p>
                    {{$t('diakont.testing.da67')}}
                  </p>
                </div>
                <div class="test-result image">
                  <img alt="" src="http://www.diakont.com/ck_images/1476891086.jpg">
                </div>
              </div>
              <div class="test-result-item">
                <div class="test-result description">
                  <h5>DA99 & DA140</h5>
                  <p>
                    {{$t('diakont.testing.da99')}}
                  </p>
                </div>
                <div class="test-result image">
                  <img alt="" src="http://www.diakont.com/ck_images/1476891113.jpg">
                </div>
              </div>
              <div class="test-result-item">
                <div class="test-result image">
                  <img alt="" src="http://www.diakont.com/ck_images/1476891123.jpg">
                </div>
                <div class="test-result image">
                  <img alt="" src="http://www.diakont.com/ck_images/1476891133.jpg">
                </div>
              </div>
            </div>

          </v-tab>
      
          <v-tab :title="$t('diakont.certs.title')">
            <h3>{{$t('diakont.certs.title')}}</h3>
            <h4>{{$t('diakont.certs.iso')}}</h4>
            <div class="diakont-certs-wrapper">
              <div class="diakont-certs" id="cert1">
                <a href="http://www.diakont.com/ck_images/1519317066.pdf" target="_blank">
                  <img src="http://www.diakont.com/ck_images/1.jpg" alt="Cert1">
                </a>
              </div>
              <div class="diakont-certs" id="cert2">
                <a href="http://www.diakont.com/ck_images/1519317153.eng.pdf" target="_blank">
                  <img src="http://www.diakont.com/ck_images/2.jpg" alt="Cert1">
                </a>
              </div>
              <div class="diakont-certs" id="cert3">
                <a href="http://diakont.com/pdf/DAT_ISO_2017.pdf" target="_blank">
                  <img src="http://www.diakont.com/ck_images/3.jpg" alt="Cert1">
                </a>
              </div>
            </div>
            <p>
	            {{$t('diakont.certs.description.p0')}}
              <br>
	            <br>
	            {{$t('diakont.certs.description.p1')}}
              <br>
	            <br>
	            {{$t('diakont.certs.description.p2')}}
            </p>
          </v-tab>

          <v-tab :title="$t('diakont.downloads.title')">
            <h3>{{$t('diakont.downloads.title')}}</h3>
            <img class="diakont-brochure-image" src="/static/diakontDASeries.png" alt="Diakont DA Series Brochure Image" > 
            <p>
              <u>
                <strong>
                  <a href="http://www.diakont.com/ck_images/1510941283.pdf" target="_blank">Download the complete DA Series electric actuator brochure</a>
                </strong>
              </u>
            </p>
          </v-tab>
        </vue-tabs>
      
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Diakont',
    data() {
      return {
        supplier: {
          name: 'diakont',
          url: 'http://www.diakont.com/motion_control/49/industrial-da-series-actuators.html',
        },
        columns: [
          {label: 'Model',field: 'model'},
          {label: 'Peak force (N)',field: 'force',type:'number', formatFn: this.addCommas},
          {label: 'Max. velocity (mm/sec)',field: 'velocity',type:'number'},
          {label: 'Cont. force rating (Stall) (N)',field: 'stall',type:'number', formatFn: this.addCommas},
          {label: 'Min. stroke (mm)',field: 'stroke',type:'number'},
          {label: 'Thread lead (mm)',field: 'thread',type:'decimal', html: false},
          {label: 'Dynamic load rating (N)',field: 'load',type:'number', formatFn: this.addCommas}
        ],
        rows: [
          {model:'DA140-22',force:60000,velocity:100,stall:36300,stroke:220,thread:2.5,load:114000},
          {model:'DA140-25',force:44600,velocity:200,stall:22300,stroke:220,thread:5,load:98000},
          {model:'DA99-W22',force:24000,velocity:150,stall:17300,stroke:150,thread:2.5,load:53600},
          {model:'DA99-W35',force:24000,velocity:300,stall:13000,stroke:200,thread:5,load:56000},
          {model:'DA99-W25',force:22000,velocity:300,stall:9700,stroke:150,thread:5,load:56000},
          {model:'DA99-W312',force:15000,velocity:750,stall:6050,stroke:200,thread:12.5,load:48200},
          {model:'DA78-22',force:13000,velocity:150,stall:6250,stroke:75,thread:2.5,load:32000},
          {model:'DA78-35',force:13000,velocity:300,stall:4600,stroke:150,thread:5,load:33500},
          {model:'DA78-25',force:9000,velocity:300,stall:3500,stroke:75,thread:5,load:20700},
          {model:'DA99-W212',force:8800,velocity:750,stall:4300,stroke:150,thread:12.5,load:48200},
          {model:'DA67-22',force:5560,velocity:208,stall:2670,stroke:75,thread:2.5,load:25270},
          {model:'DA67-210',force:1446,velocity:883,stall:723,stroke:75,thread:10,load:7500},
        ]
      }
    },
    methods: {
      titleize(sentence) {
        if (!sentence.split) return sentence;
        var _titleizeWord = function(string) {
            return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
          },
          result = [];
        sentence.split(" ").forEach(function(w) {
          result.push(_titleizeWord(w));
        });
        return result.join(" ");
      },
      addCommas(nStr){
        nStr += '';
        let x = nStr.split('.');
        let x1 = x[0];
        let x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
          x1 = x1.replace(rgx, '$1' + ',' + '$2');
        }
        return x1 + x2;
      }
    }
  }
</script>

<style lang="scss">

.overview-section-area {
  display: flex;
  justify-content: space-around;
  .overview-section-img-area {
  
  }
  .overview-section-description {
    //width: 50%
  }
}

.test-result-item {
  display: flex;
  justify-content: flex-start;
  .test-result {
    width: 47.5%;
    margin: 1.25%;
  }
}

.diakont-certs-wrapper {
  display: inline-flex;
  justify-content: space-between;
  width: 70%;
}
</style>
