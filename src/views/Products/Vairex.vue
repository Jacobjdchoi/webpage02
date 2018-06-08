<template>
  <div>
    <h1 class="page-title">{{ $t('vairex.title') }}</h1>
    <div class="center-contents">
      <div :id="supplier.name" class="body">
        <div class="supplier-info md-layout md-gutter md-alignment-center">
          <div class="md-layout-item md-large-size-25 md-medium-size-25 md-small-size-30 md-xsmall-size-100 supplier-logo-area" :id="supplier.name +'-logo-area'">
            <img src="@/assets/vairex-logo.png" :alt="supplier.name+'-logo'" :class="supplier.name+ '-logo-image'">
          </div>
          <div class="md-layout-item md-large-size-75 md-medium-size-75 md-small-size-70 md-xsmall-size-100 supplier-intro">
            <p class="supplier-intro-paragraph">
              {{$t('vairex.supplierIntro')}}
            </p>
          </div>
        </div>
        <div class="supplier-website-link" :id="supplier.name+'-website-link'">
          <a :href="supplier.url" target="_blank"> &rarr; {{$t('visitWebsite')}}</a>
        </div>
        <!-- <div class="supplier-intro-area">
          <img src="@/assets/vairex-banner.jpg" alt="vairex-banner" :class="supplier.name+ '-intro-image'">
        </div> -->
        
        <vue-tabs>
          <v-tab :title="$t('vairex.compressor.title')">
            <h2>{{$t('vairex.compressor.title')}}</h2>
            <p>{{$t('vairex.compressor.desc')}}</p>
            <p>{{$t('diakont.specifications.instruction')}}</p>
            <vue-good-table
              title=""
              :columns="vrb.columns"
              :rows="vrb.rows"
              responsive
            >
              <template slot="table-row" slot-scope="props">
                <span v-if="props.column.field == 'model'">
                  <a :href="supplier.url + props.row.link" target="_blank">
                    {{props.row.model}}
                    <icon class="external-link-icon" name="external-link" scale="0.87"></icon>
                  </a>
                </span>
                <span v-else>
                  {{props.formattedRow[props.column.field]}}
                </span>
              </template>
            </vue-good-table>
            <p>{{$t('vairex.compressor.tableDisclaimer')}}</p>
          </v-tab>
          <v-tab :title="$t('vairex.silencer.title')">
            <h2>{{$t('vairex.silencer.title')}}</h2>
            <p>{{$t('vairex.silencer.desc')}}</p>
            <div class="vairex-product-area md-layout md-gutter md-alignment-center" v-for="product in silencers" :key="product.name">
              <div class="product-description-area md-layout-item md-large-size-70 md-medium-size-70 md-small-size-65 md-xsmall-size-100">
                <div class="md-layout md-alignment-center">
                  <h3 class="product-name md-layout-item md-large-size-100 md-medium-size-100 md-small-size-100 md-xsmall-size-100">{{product.name}}</h3>
                  <img class="product-image md-layout-item md-large-size-50 md-medium-size-50 md-small-size-50 md-xsmall-size-100" :src="product.imgSrc" :alt="product.name + 'image'">
                  <div class="product-text md-layout-item md-large-size-50 md-medium-size-50 md-small-size-50 md-xsmall-size-100">
                    <p class="product-paragraph first">{{$t(product.desc1)}}</p>
                    <p class="product-paragraph second" v-if="product.desc2 !== ''">{{$t(product.desc2)}}</p>
                  </div>
                </div>
              </div>
              <div class="product-data md-layout-item md-large-size-30 md-medium-size-30 md-small-size-35 md-xsmall-size-100">
                <table>
                  <tbody>
                    <tr>
                      <td>{{$t('vairex.silencer.data.size')}}</td><td>{{$t(product.tubeSize)}}</td>
                    </tr>
                    <tr>
                      <td>{{$t('vairex.silencer.data.material')}}</td><td>{{$t(product.material)}}</td>
                    </tr>
                    <tr>
                      <td>{{$t('vairex.silencer.data.temp')}}</td><td>{{$t(product.temp)}}</td>
                    </tr>
                  </tbody>
                </table>
              </div> <!-- .product-data -->
            </div> <!-- .vairex-product-area -->
          </v-tab>

          <v-tab :title="$t('vairex.controller.title')">
            <h2>{{$t('vairex.controller.title')}}</h2>
            <p>{{$t('vairex.controller.desc1')}}</p>
            <p>{{$t('vairex.controller.desc2')}}</p>
            <div class="vairex-product-area md-layout md-gutter md-alignment-center" >
              <div class="product-description-area md-layout-item md-large-size-70 md-medium-size-70 md-small-size-65 md-xsmall-size-100">
                <div class="md-layout md-alignment-center">
                  <h4 class="product-name md-layout-item md-large-size-100 md-medium-size-100 md-small-size-100 md-xsmall-size-100">VMC100-1500</h4>
                  <img class="product-image md-layout-item md-large-size-50 md-medium-size-50 md-small-size-50 md-xsmall-size-100" src="https://vairex.com/wp-content/uploads/2016/11/Vx-cntrl.jpg" alt="VMC100-1500-image">
                  <div class="product-text md-layout-item md-large-size-50 md-medium-size-50 md-small-size-50 md-xsmall-size-100">
                    <p class="product-paragraph second">{{$t('vairex.controller.vmc100.desc')}}</p>
                  </div>
                </div>
              </div>
              <div class="product-data md-layout-item md-large-size-30 md-medium-size-30 md-small-size-35 md-xsmall-size-100">
                <table>
                  <tbody>
                    <tr>
                      <td>{{$t('vairex.controller.data.method')}}</td><td>0-5V OR 0-10V Analog Signal, OR CAN bus</td>
                    </tr>
                    <tr>
                      <td>{{$t('vairex.controller.data.volt')}}</td><td>10-100</td>
                    </tr>
                    <tr>
                      <td>{{$t('vairex.controller.data.current')}}</td><td>30</td>
                    </tr>
                    <tr>
                      <td>{{$t('vairex.controller.data.power')}}</td><td>1500</td>
                    </tr>
                  </tbody>
                </table>
              </div> <!-- .product-data -->
            </div> <!-- .vairex-product-area -->
          </v-tab>

        </vue-tabs>
  
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'vairex',
    data() {
      return {
        supplier: {
          name: 'vairex',
          url: 'https://vairex.com/'
        },
        vrb:{
          columns: [
            {field: 'model', label: this.$t('vairex.compressor.model')},
            {field: 'mxflw', label: this.$t('vairex.compressor.mxflw') + '* (gram/s)', type:'decimal', width: '110px'},
            {field: 'mxprs', label: this.$t('vairex.compressor.mxprs') + '* (P/p)', type:'decimal', width: '110px'},
            {field: 'mnvlt', label: this.$t('vairex.compressor.mnvlt'), type:'number', width: '110px'},
            {field: 'mxvlt', label: this.$t('vairex.compressor.mxvlt'), type:'number', width: '110px'},
            {field: 'status', label: this.$t('vairex.compressor.status')},
            {filed: 'link', label: 'Link', hidden: true}
          ],
          rows: [
            {model: 'VRB1', mxflw: 3.0, mxprs: 1.18, mnvlt: 20, mxvlt: 50, status: this.$t('vairex.compressor.proto'), link: 'vrb1/#VRB1REV2'},
            {model: 'VRB2-18', mxflw: 5.5, mxprs: 1.3, mnvlt: 20, mxvlt: 50, status: this.$t('vairex.compressor.produ'), link: 'vrb2/#VRB2-18'},
            {model: 'VRB2-25', mxflw: 6.5, mxprs: 1.4, mnvlt: 20, mxvlt: 50, status: this.$t('vairex.compressor.produ'), link: 'vrb2/#VRB2-25'},
            {model: 'VRB4-18', mxflw: 14, mxprs: 1.12, mnvlt: 20, mxvlt: 50, status: this.$t('vairex.compressor.produ'), link: 'vrb4/#VRB4-18'},
            {model: 'VRB4-25', mxflw: 14, mxprs: 1.24, mnvlt: 20, mxvlt: 50, status: this.$t('vairex.compressor.produ'), link: 'vrb4/#VRB4-25'},
            {model: 'VRB6-18', mxflw: 10, mxprs: 1.24, mnvlt: 20, mxvlt: 50, status: this.$t('vairex.compressor.proto'), link: 'vrb6/#VRB6-18'},
            {model: 'VRB6-25', mxflw: 11, mxprs: 1.36, mnvlt: 20, mxvlt: 50, status: this.$t('vairex.compressor.proto'), link: 'vrb6/#VRB6-25'},
            {model: 'VRB6-2-25', mxflw: 10, mxprs: 1.42, mnvlt: 20, mxvlt: 50, status: this.$t('vairex.compressor.devel'), link: 'vrb6/#VRB6-2-25'},
            {model: 'VRB6-2-35', mxflw: 10, mxprs: 1.42, mnvlt: 20, mxvlt: 50, status: this.$t('vairex.compressor.devel'), link: 'vrb6/#VRB6-2-35'},
            {model: 'VRB8-25', mxflw: 21, mxprs: 1.3, mnvlt: 20, mxvlt: 50, status: this.$t('vairex.compressor.produ'), link: 'vrb8/#VRB8-25'},
            {model: 'VRB8-35', mxflw: 20, mxprs: 1.35, mnvlt: 48, mxvlt: 48, status: this.$t('vairex.compressor.produ'), link: 'vrb8/#VRB8-35'},
            {model: 'VRB8-2-35, Parallel', mxflw: 30, mxprs: 1.18, mnvlt: 48, mxvlt: 48, status: this.$t('vairex.compressor.produ'), link: 'vrb8/#VRB8-2-35-Parallel'},
            {model: 'VRB8-2-35, Series', mxflw: 19, mxprs: 1.4, mnvlt: 48, mxvlt: 48, status: this.$t('vairex.compressor.produ'), link: 'vrb8/#VRB8-2-35-Series'},
            {model: 'VRB8-2-HP, Parallel', mxflw: 30, mxprs: 1.24, mnvlt: 48, mxvlt: 48, status: this.$t('vairex.compressor.produ'), link: 'vrb8/#VRB8-2-HP-Parallel'},
            {model: 'VRB8-2-HP, Series', mxflw: 21, mxprs: 1.5, mnvlt: 48, mxvlt: 48, status: this.$t('vairex.compressor.produ'), link: 'vrb8/#VRB8-2-HP-Series'},
            {model: 'VRB16-35', mxflw: 28, mxprs: 1.24, mnvlt: 48, mxvlt: 48, status: this.$t('vairex.compressor.proto'), link: 'vrb16/#VRB16-35'},
            {model: 'VRB16-2-100V', mxflw: 20, mxprs: 1.42, mnvlt: 100, mxvlt: 100, status: this.$t('vairex.compressor.devel'), link: 'vrb16/#VRB16-2-100V'},
            {model: 'VRB32-100V', mxflw: 33, mxprs: 1.2, mnvlt: 100, mxvlt: 400, status: this.$t('vairex.compressor.proto'), link: 'vrb32/#VRB32-100V'},
            {model: 'VRB32-2-100V-Parallel', mxflw: 75, mxprs: 1.2, mnvlt: 100, mxvlt: 400, status: this.$t('vairex.compressor.proto'), link: 'vrb32/#VRB32-2-100V-Parallel'},
            {model: 'VRB32-2-100V-Series', mxflw: 40, mxprs: 1.42, mnvlt: 100, mxvlt: 400, status: this.$t('vairex.compressor.proto'), link: 'vrb32/#VRB32-2-100V-Series'},
            {model: 'VRB32-2-WC-Parallel', mxflw: 75, mxprs: 1.22, mnvlt: 100, mxvlt: 400, status: this.$t('vairex.compressor.proto'), link: 'vrb32/#VRB32-2-WC-Parallel'},
            {model: 'VRB32-2-WC-Series', mxflw: 40, mxprs: 1.42, mnvlt: 100, mxvlt: 400, status: this.$t('vairex.compressor.proto'), link: 'vrb32/#VRB32-2-WC-Series'},
          ]
        },
        silencers: [
          { 
            name: 'VS14',
            desc1: 'vairex.silencer.vs14.desc1',
            desc2: '',
            tubeSize: "vairex.silencer.vs14.tubeSize", material: 'vairex.silencer.vs14.material', temp: "88°C",
            link: 'https://vairex.com/silencers/',
            imgSrc: 'https://vairex.com/wp-content/uploads/2017/01/VS14-01-Render.jpg'
          },
          { 
            name: 'VS25',
            desc1: 'vairex.silencer.vs25.desc1',
            desc2: 'vairex.silencer.vs25.desc2',
            tubeSize: "vairex.silencer.vs25.tubeSize", material: 'vairex.silencer.vs25.material', temp: "88°C",
            link: 'https://vairex.com/silencers/',
            imgSrc: 'https://vairex.com/wp-content/uploads/Official_Product_Information/Renders/VS25-01-Render-Tight-Crop.jpg'
          },
          { 
            name: 'VS30',
            desc1: 'vairex.silencer.vs30.desc1',
            desc2: 'vairex.silencer.vs30.desc2',
            tubeSize: "vairex.silencer.vs30.tubeSize", material: 'vairex.silencer.vs30.material', temp: "88°C",
            link: 'https://vairex.com/silencers/',
            imgSrc: 'https://vairex.com/wp-content/uploads/Official_Product_Information/Renders/VS25-01-Render-Tight-Crop.jpg'
          },
          { 
            name: 'VS33',
            desc1: 'vairex.silencer.vs33.desc1',
            desc2: '',
            tubeSize: "vairex.silencer.vs33.tubeSize", material: 'vairex.silencer.vs33.material', temp: "88°C",
            link: 'https://vairex.com/silencers/',
            imgSrc: 'https://vairex.com/wp-content/uploads/2017/01/VS33.jpg'
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
%vairex-button {
  text-align: center;
  white-space: normal;
  color: #4c4e7e;
  background-color: transparent;
  background-image: none;
  border-color: #4c4e7e;
  &:hover{
      color: #fff;
      background-color: #4c4e7e;
      border-color: #4c4e7e;
  }
}

.supplier-products-intro{
  margin: 15px;
  .supplier-products-link-button {
    width: 100%;
    height: 75px;
    @extend %vairex-button;
    .product-button-header{
      margin: 5px 0;
    }
  }
}

.product-finder-button {
  width: 100%;
  height: 75px;
  @extend %vairex-button;
}

.accessories-product-list{
  .accessories-product-item{
    text-align: center;
    padding: 0 0 0 10px;
    position: relative;
    .accessories-product-link{
      .category-image{
        height: 200px;
        background-position: center center!important;
        background-size: cover!important;
        position: relative;
        width: 100%;
        height: 280px;
        &#category-inductors{
          background: url('https://www.vairex.com/wp-content/uploads/2017/12/inductors.jpg');
        }
        &#category-transformers{
          background: url('https://www.vairex.com/wp-content/uploads/2017/12/transformers.jpg');
        }
        &#category-cables{
          background: url('https://www.vairex.com/wp-content/uploads/2017/11/cables.jpg');
        }
      }
      .category-name{
        color: #fff;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
        width: calc(100% - 10px);
        z-index: 500;
        h3 {  
          text-transform: uppercase;
          text-align: center;
          font-size: 20px;
          font-weight: 700;
          padding: 20px 10px;
          background-color: rgba(0,0,0,.5);
          width: 60%;
          margin: 0 auto;
          line-height: 1.5;
          &:hover {
            background-color: rgba(0,0,0,.85);
          }
        }
      }
    }
  }
}
.vairex-product-area{
  width: 100%;
  margin: 0 !important;
  .product-description-area {
    padding: 0 10px !important;
    .product-name {

    }
    .product-image, .product-text {
      padding: 10px;
      .product-paragraph{

      }
    }
  }
  .product-data{
    padding: 0 10px !important;
    table{
      border-collapse: collapse;
      border-spacing: 0;
      width: 100%;
      margin-bottom: 1em;
      border: none;
      tbody {
        display: table-row-group;
        vertical-align: middle;
        border-color: inherit;
        tr{
          display: table-row;
          vertical-align: inherit;
          border-color: inherit;
          td {
            padding: 1em;
          }
          &:hover {
            background-color: #e4e4e4 !important;
          }
        }
        tr:nth-child(odd){
          background-color: #eeeeee;
        }
        tr:nth-child(even){
          background: white;
        }
      }
    }
  }
}
.external-link-icon {
  vertical-align: middle;
}
</style>