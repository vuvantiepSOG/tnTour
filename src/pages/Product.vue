<template>
  <div
    style="
      font-weight: 400;
      font-family: 'times new roman', times, serif;
      font-size: 15pt;
    "
  >
    <v-container class="mt-16">
      <div class="row">
        <div class="row mt-5 ml-5" v-if="product">
          <div class="col-md-5 col-sm-5 col-xs-12 mt-10">
            <v-carousel>
              <v-carousel-item :src="require('../img/2.jpg')">
              </v-carousel-item>
              <v-carousel-item :src="require('../img/Mu-Cang-Chai.jpg')">
              </v-carousel-item>
              <v-carousel-item :src="require('../img/dalat.jpg')">
              </v-carousel-item>
              <v-carousel-item :src="require('../img/blurcamera.jpg')">
              </v-carousel-item>
            </v-carousel>
          </div>
          <div class="col-6 pa-0">
            <div>
              <div class="pl-6">
                <h2>Thông tin về chuyến đi</h2>
                <p class="display-1 mb-2">{{ product.productName }}</p>
                <v-card-actions class="pa-0">
                  <p class="headline font-weight-light pt-3">
                    Giá: 980 $
                  </p>

                  <v-spacer></v-spacer>
                  <div>
                    <v-rating
                      v-model="rating"
                      class=""
                      background-color="warning lighten-3"
                      color="warning"
                      dense
                    ></v-rating>
                    <span class="body-2 font-weight-thin mr-3"
                      >({{ product.rate }} đánh giá của khách hàng)
                    </span>
                  </div>
                </v-card-actions>
                <p>Mã số sản phẩm: {{ product.id }}</p>
                <p class="subtitle-1 font-weight-thin">
                  {{ product.description }}
                </p>
                <p>
                  <a
                    href="https://youtu.be/M9GAXr4CcTg"
                    rel="wp-video-lightbox nofollow external"
                    data-wpel-link="external"
                    ><img
                      class="alignnone wp-image-14205 size-full"
                      src="https://donghohaitrieu.com/wp-content/uploads/hai-trieu/icon/unbox.gif"
                      alt=""
                      width="85"
                      height="106"
                  /></a>
                  <a
                    href="https://youtu.be/x1kROjLdUXI"
                    rel="wp-video-lightbox nofollow external"
                    data-wpel-link="external"
                    ><img
                      class="alignnone wp-image-14205 size-full"
                      src="https://donghohaitrieu.com/wp-content/uploads/hai-trieu/icon/360.gif"
                      alt=""
                      width="85"
                      height="106"
                  /></a>
                  <a
                    href="https://youtu.be/_vkE1auq6yA"
                    rel="wp-video-lightbox nofollow external"
                    data-wpel-link="external"
                    ><img
                      class="alignnone wp-image-14205 size-full"
                      src="https://donghohaitrieu.com/wp-content/uploads/hai-trieu/icon/reviews.gif"
                      width="85"
                      height="106"
                  /></a>
                </p>
                <p class="title"><strong>ITEMS</strong></p>

                <v-text-field
                  outlined
                  style="width: 100px"
                  :value="1"
                  dense
                ></v-text-field>
                <v-btn class="primary white--text mt-10" outlined tile dense
                  ><v-icon>mdi-cart</v-icon> Add Cart</v-btn
                >
              </div>
            </div>
            <div class="mt-5">
              <p style="text-align: center">
                <span
                  >Có thanh toán:
                  <a
                    style="text-decoration: none"
                    href="https://donghohaitrieu.com/tin-tuc/hai-trieu/chinh-sach-mua-dong-ho-tra-gop-tai-dong-ho-hai-trieu.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-wpel-link="internal"
                    ><span class="text-decoration:none;" style="color: #d83131"
                      >Trả Góp</span
                    ></a
                  >
                  khi mua Online (Qua thẻ tín dụng)</span
                >
                <br />
              </p>
              <div class="callorder text-center">
                <div class="ct">
                  Gọi đặt mua:
                  <span style="color: #d83131"
                    ><a
                      style="text-decoration: none"
                      href="tel:0123455"
                      data-wpel-link="internal"
                      >1900.6777</a
                    ></span
                  >
                  (8:00-1:30)
                </div>
              </div>
            </div>
          </div>
          <div class="row mb-8">
            <div class="col-sm-12 col-xs-12 col-md-12">
              <v-tabs>
                <v-tab>Mô tả</v-tab>
                <v-tab>Lịch trình </v-tab>
                <v-tab>Dánh giá</v-tab>
                <v-tab-item>
                  <div class="vc_column-inner">
                    <div class="wpb_wrapper">
                      <div class="wpb_text_column wpb_content_element">
                        <div class="wpb_wrapper">
                          <div
                            class="thong-tin-san-pham mt-5"
                            style="font-size: 15px"
                          >
                            <div
                              class="v-responsive v-image grey lighten-2"
                              style="height: 500px; width: 100%"
                            >
                              <div
                                class="v-responsive__sizer"
                                style="padding-bottom: 66.7273%"
                              ></div>
                              <div
                                class="v-image__image v-image__image--cover"
                                style="
                                  background-image: url('https://vietnamembassy-mongolia.org/wp-content/uploads/2020/02/du-lich-mu-cang-chai-2020-vietnamembassy-mongolia.org_.jpg');
                                  background-position: center center;
                                "
                              ></div>
                              <div
                                class="v-responsive__content"
                                style="width: 1100px"
                              >
                                <div class="row fill-height pa-3 align-center">
                                  <div class="col-md-7 offset-md-5 col-12">
                                    <h1
                                      class="display-3 font-weight-light"
                                      style="color: #fff"
                                    >
                                      Mù Cang Chải - Yên Bái
                                    </h1>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div style="font-weight: bold; font-size: 17px">
                              Trong những năm gần đây, năm nào cũng vậy, cứ vào
                              khoảng cuối tháng 9, đầu tháng 10 hàng năm, du
                              khách khắp mọi miền tổ quốc đều đổ về Mù Cang Chải
                              để chiêm ngưỡng khung cảnh đẹp tuyệt vời của mảnh
                              đất vùng cao này. Đến với nơi đây, du khách không
                              chỉ được thưởng ngoạn vẻ đẹp của những thửa ruộng
                              bậc thang, những biển mây trắng trên đỉnh đèo Cao
                              Phạ mà còn được đắm mình vào những lễ hội văn hóa
                              độc đáo của đồng bào Mông.
                            </div>

                            <p style="text-align: center">
                              <img
                                alt=""
                                height="512"
                                src="https://yenbai.gov.vn/noidung/tintuc/PublishingImages/Thong-Tin-Tinh/Thang-Canh-Du-Lich/mcc4.jpg"
                                width="768"
                              />
                            </p>
                            <span
                              style="
                                font-family: arial, sans-serif;
                                font-size: 17px;
                              "
                              >Mù Cang Chải là huyện vùng cao phía Tây của tỉnh
                              Yên Bái, cách trung tâm thành phố Yên Bái 180km,
                              cách thủ đô Hà Nội hơn 300km về phía Tây Bắc. Vùng
                              đất này nằm dưới chân của dãy núi Hoàng Liên Sơn,
                              ở độ cao trên 2.000m so với mặt biển. Đến Mù Cang
                              Chải, du khách có thể đi đường Quốc lộ 32 bằng hai
                              hướng. Nếu từ Hà Nội, sẽ lên Yên Bái, từ Yên Bái
                              đến Mường Lò 70km, ngủ tại đây để sáng sớm mai đi
                              xe từ Mường Lò, xế trưa sẽ đến Mù Cang Chải. Đoạn
                              này dài gần 100km, nhưng hơn 80km là đường đèo dốc
                              tiến lên liên tục, chừng nào leo đến độ cao
                              1.750m, sương mây mù mịt là sắp đến thị trấn Mù
                              Cang Chải. Chặng giữa đèo có một miền đất phẳng,
                              hãy nghỉ chân ở đây để thưởng thức thứ cơm lam nếp
                              Tú Lệ dẻo thơm nức tiếng khắp vùng. Hướng thứ hai,
                              du khách&nbsp;đi hết đường cao tốc Nội Bài - Lào
                              Cai, lên Sa Pa và qua đèo Ô Quy Hồ, sau đó qua Tân
                              Uyên và Than Uyên của Lai Châu để tới Mù Cang
                              Chải.</span
                            >
                            <p style="text-align: center">
                              <img
                                alt=""
                                height="512"
                                src="https://yenbai.gov.vn/noidung/tintuc/PublishingImages/Thong-Tin-Tinh/Thang-Canh-Du-Lich/mcc4.jpg"
                                width="768"
                              />
                            </p>
                            <span style="font-size: 17px"
                              ><span style="font-family: arial, sans-serif"
                                >Thị trấn Mù Cang Chải nhỏ xinh nằm gọn giữa hai
                                sườn núi với những bản làng thanh bình dưới
                                thung lũng xanh hay trên đèo Khau Phạ. Chiếm 90%
                                dân số toàn huyện, người Mông ở Mù Cang Chải có
                                4 nhóm: Mông Đơ (Mông Trắng); Mông Đu (Mông
                                Đen); Mông Lình (Mông Hoa); Mông Si (Mông Đỏ),
                                họ cư trú ở những sườn núi cao từ 800 đến 1.700m
                                với những nét văn hóa đậm đà truyền thống, đặc
                                sắc luôn thu hút nhiều nhà nghiên cứu. Đến nơi
                                đây, du khách có thể vào thăm các bản làng dân
                                tộc Mông, khám phá nét văn hóa cũng như những
                                phong tục tập quán nơi vùng cao Tây Bắc với
                                nhiều giá trị văn hóa nghệ thuật dân gian đặc
                                sắc và sản vật nổi tiếng. Xem múa khèn, cùng
                                trai gái Mông đi hội Sải Sán, trải nghiệm một số
                                nghề thủ công truyền thống như: nghề rèn đúc,
                                dệt vải bằng sợi lanh, làm đồ trang sức và
                                thưởng thức các món ăn truyền thống của đồng bào
                                Mông. Đặc biệt du khách cũng không thể bỏ qua và
                                nghé thăm bản Thái, chỉ cần đi qua cây cầu ở
                                ngay trung tâm huyện (hướng về xã Chế Tạo nơi có
                                khu bảo tồn loài sinh vật cảnh) rồi rẽ trái đi
                                khoảng 1km sẽ tới bản Thái. Một bản nhỏ bình yên
                                nằm giữa thung lũng, lưng tựa vào núi. Ở đây, du
                                khách sẽ được thưởng thức các món ăn đặc sản của
                                người Thái, tắm lá thuốc theo cách cổ truyền của
                                người Thái, nghỉ ngơi tại nhà sàn và cùng tổ
                                chức giao lưu, đốt lửa trại, múa xòe.</span
                              ></span
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </v-tab-item>
                <v-tab-item>
                  <div data-v-35ae4c1c="" class="row" style=" padding-left: 20px;">
                    <div data-v-35ae4c1c="" class="col-md-8 col-12">
                      <div data-v-35ae4c1c="" class="text-h4">
                        Book With Extra Flexibility
                      </div>
                      <div data-v-a630fe12="" data-v-35ae4c1c="">
                        <div data-v-a630fe12="" class="row">
                          <div
                            data-v-a630fe12=""
                            class="d-flex align-center col-md-6 col-12"
                          >
                            <div
                              data-v-2f7bb626=""
                              data-v-a630fe12=""
                              class="row align-center"
                            >
                              <div
                                data-v-2f7bb626=""
                                class="
                                  secondary
                                  circle
                                  d-flex
                                  align-center
                                  justify-center
                                "
                              >
                                <i
                                  data-v-2f7bb626=""
                                  aria-hidden="true"
                                  class="
                                    v-icon
                                    notranslate
                                    white--text
                                    mdi mdi-calendar-clock
                                    theme--light
                                  "
                                  style="font-size: 2em"
                                ></i>
                              </div>
                              <div data-v-2f7bb626="" class="col">
                                <div
                                  data-v-2f7bb626=""
                                  class="font-weight-medium"
                                >
                                  Change dates
                                </div>
                                <div data-v-2f7bb626="">
                                  Choose new departure dates if your plans
                                  change.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            data-v-a630fe12=""
                            class="d-flex align-center col-md-6 col-12"
                          >
                            <div
                              data-v-2f7bb626=""
                              data-v-a630fe12=""
                              class="row align-center"
                            >
                              <div
                                data-v-2f7bb626=""
                                class="
                                  secondary
                                  circle
                                  d-flex
                                  align-center
                                  justify-center
                                "
                              >
                                <i
                                  data-v-2f7bb626=""
                                  aria-hidden="true"
                                  class="
                                    v-icon
                                    notranslate
                                    white--text
                                    mdi mdi-map-marker-check-outline
                                    theme--light
                                  "
                                  style="font-size: 2em"
                                ></i>
                              </div>
                              <div data-v-2f7bb626="" class="col">
                                <div
                                  data-v-2f7bb626=""
                                  class="font-weight-medium"
                                >
                                  Choose a different tour
                                </div>
                                <div data-v-2f7bb626="">
                                  Change to a different tour if you want
                                  something different.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            data-v-a630fe12=""
                            class="d-flex align-center col-md-6 col-12"
                          >
                            <div
                              data-v-2f7bb626=""
                              data-v-a630fe12=""
                              class="row align-center"
                            >
                              <div
                                data-v-2f7bb626=""
                                class="
                                  secondary
                                  circle
                                  d-flex
                                  align-center
                                  justify-center
                                "
                              >
                                <i
                                  data-v-2f7bb626=""
                                  aria-hidden="true"
                                  class="
                                    v-icon
                                    notranslate
                                    white--text
                                    mdi mdi-credit-card-check-outline
                                    theme--light
                                  "
                                  style="font-size: 2em"
                                ></i>
                              </div>
                              <div data-v-2f7bb626="" class="col">
                                <div
                                  data-v-2f7bb626=""
                                  class="font-weight-medium"
                                >
                                  Get credit if plans change
                                </div>
                                <div data-v-2f7bb626="">
                                  Get credit for future trips if you need more
                                  time to decide.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            data-v-a630fe12=""
                            class="d-flex align-center col-md-6 col-12"
                          >
                            <div
                              data-v-2f7bb626=""
                              data-v-a630fe12=""
                              class="row align-center"
                            >
                              <div
                                data-v-2f7bb626=""
                                class="
                                  secondary
                                  circle
                                  d-flex
                                  align-center
                                  justify-center
                                "
                              >
                                <i
                                  data-v-2f7bb626=""
                                  aria-hidden="true"
                                  class="
                                    v-icon
                                    notranslate
                                    white--text
                                    mdi mdi-headset
                                    theme--light
                                  "
                                  style="font-size: 2em"
                                ></i>
                              </div>
                              <div data-v-2f7bb626="" class="col">
                                <div
                                  data-v-2f7bb626=""
                                  class="font-weight-medium"
                                >
                                  24/7 Support
                                </div>
                                <div data-v-2f7bb626="">
                                  Reach out to us anytime via online chat, phone
                                  or email.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div data-v-35ae4c1c="" class="text-h4">Introduction</div>
                      <div data-v-35ae4c1c="" class="text-body-1 py-1">
                        Northwest Vietnam is a captivating mix of dramatic
                        mountainscapes, crisp fresh air and colourfully-clothed
                        hilltribes.
                      </div>
                      <div data-v-35ae4c1c="" class="text-body-1 py-1">
                        Set on the slopes of a beautiful emerald green valley,
                        Sapa is the heart of this unique piece of Vietnam.
                      </div>
                      <div data-v-35ae4c1c="" class="text-body-1 py-1">
                        Travel to this peaceful land and meet resplendently
                        dressed ethnic minorities at the local market, visit
                        neighbouring villages and hike through iridescent rice
                        terraces, witnessing how the current of life has bubbled
                        along here for centuries.
                      </div>
                      <div data-v-35ae4c1c="" class="text-body-1 py-1">
                        This five-day trekking adventure is full of
                        opportunities to be immersed in traditional hilltribe
                        culture and cuisine, while relishing the striking
                        landscapes of Sapa and its surrounds.This Short Break
                        Adventure is a ‘join in’ group departure, which means
                        for some portions of this trip, such as at the homestay,
                        you may join-in with other travellers who have booked on
                        a different style of trip, or through other companies..
                      </div>
                      <div data-v-35ae4c1c="" class="text-h4">
                        Your Travel, Your Tour
                      </div>
                      <div data-v-592e02f7="" data-v-35ae4c1c="" class="my-6">
                        <div data-v-592e02f7="">
                          Have you considered booking this tour privately?
                          Contact Us now!
                        </div>
                        <div data-v-592e02f7="" class="row">
                          <div
                            data-v-592e02f7=""
                            class="d-flex align-center col-md-6 col-12"
                          >
                            <div
                              data-v-2f7bb626=""
                              data-v-592e02f7=""
                              class="row align-center"
                            >
                              <div
                                data-v-2f7bb626=""
                                class="
                                  secondary
                                  circle
                                  d-flex
                                  align-center
                                  justify-center
                                "
                              >
                                <i
                                  data-v-2f7bb626=""
                                  aria-hidden="true"
                                  class="
                                    v-icon
                                    notranslate
                                    white--text
                                    mdi mdi-notebook-edit-outline
                                    theme--light
                                  "
                                  style="font-size: 2em"
                                ></i>
                              </div>
                              <div data-v-2f7bb626="" class="col">
                                <div
                                  data-v-2f7bb626=""
                                  class="font-weight-medium"
                                >
                                  Personalise your trip
                                </div>
                                <div data-v-2f7bb626="">
                                  Make changes to the itinerary, accommodation,
                                  or transport method.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            data-v-592e02f7=""
                            class="d-flex align-center col-md-6 col-12"
                          >
                            <div
                              data-v-2f7bb626=""
                              data-v-592e02f7=""
                              class="row align-center"
                            >
                              <div
                                data-v-2f7bb626=""
                                class="
                                  secondary
                                  circle
                                  d-flex
                                  align-center
                                  justify-center
                                "
                              >
                                <i
                                  data-v-2f7bb626=""
                                  aria-hidden="true"
                                  class="
                                    v-icon
                                    notranslate
                                    white--text
                                    mdi mdi-hospital-box-outline
                                    theme--light
                                  "
                                  style="font-size: 2em"
                                ></i>
                              </div>
                              <div data-v-2f7bb626="" class="col">
                                <div
                                  data-v-2f7bb626=""
                                  class="font-weight-medium"
                                >
                                  Increased safety during COVID
                                </div>
                                <div data-v-2f7bb626="">
                                  Spend the majority of time amongst your group
                                  to reduce exposure with others.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            data-v-592e02f7=""
                            class="d-flex align-center col-md-6 col-12"
                          >
                            <div
                              data-v-2f7bb626=""
                              data-v-592e02f7=""
                              class="row align-center"
                            >
                              <div
                                data-v-2f7bb626=""
                                class="
                                  secondary
                                  circle
                                  d-flex
                                  align-center
                                  justify-center
                                "
                              >
                                <i
                                  data-v-2f7bb626=""
                                  aria-hidden="true"
                                  class="
                                    v-icon
                                    notranslate
                                    white--text
                                    mdi mdi-star-face
                                    theme--light
                                  "
                                  style="font-size: 2em"
                                ></i>
                              </div>
                              <div data-v-2f7bb626="" class="col">
                                <div
                                  data-v-2f7bb626=""
                                  class="font-weight-medium"
                                >
                                  Travel more exclusively
                                </div>
                                <div data-v-2f7bb626="">
                                  Your tour guide can focus all their attention
                                  on your group.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            data-v-592e02f7=""
                            class="d-flex align-center col-md-6 col-12"
                          >
                            <div
                              data-v-2f7bb626=""
                              data-v-592e02f7=""
                              class="row align-center"
                            >
                              <div
                                data-v-2f7bb626=""
                                class="
                                  secondary
                                  circle
                                  d-flex
                                  align-center
                                  justify-center
                                "
                              >
                                <i
                                  data-v-2f7bb626=""
                                  aria-hidden="true"
                                  class="
                                    v-icon
                                    notranslate
                                    white--text
                                    mdi mdi-halloween
                                    theme--light
                                  "
                                  style="font-size: 2em"
                                ></i>
                              </div>
                              <div data-v-2f7bb626="" class="col">
                                <div
                                  data-v-2f7bb626=""
                                  class="font-weight-medium"
                                >
                                  Travel for a special occasion
                                </div>
                                <div data-v-2f7bb626="">
                                  Celebrate an important event by only
                                  travelling with your friends or family.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div data-v-35ae4c1c="" class="text-h4">Itinerary</div>
                      <div
                        data-v-4a7d27e3=""
                        data-v-35ae4c1c=""
                        class="
                          v-timeline
                          ml-n11
                          mr-10
                          v-timeline--dense
                          theme--light
                        "
                      >
                        <div
                          data-v-4a7d27e3=""
                          class="
                            v-timeline-item v-timeline-item--fill-dot
                            theme--light
                          "
                        >
                          <div class="v-timeline-item__body">
                            <div
                              data-v-12c45e8a=""
                              data-v-4a7d27e3=""
                              class="
                                base-card
                                rounded-tr-xl rounded-bl-xl
                                my-4
                                mx-auto
                                v-card v-card--flat
                                v-sheet
                                theme--light
                              "
                            >
                              <div data-v-4a7d27e3="" class="py-4">
                                <div
                                  data-v-4a7d27e3=""
                                  class="
                                    v-card__title
                                    text-h6
                                    primary--text
                                    text-capitalize
                                  "
                                >
                                  day 1: hanoi
                                </div>
                                <div data-v-4a7d27e3="" class="v-card__text">
                                  <div
                                    data-v-4a7d27e3=""
                                    style="
                                      white-space: pre-line;
                                      line-height: 1.6em;
                                    "
                                  >
                                    Xin chao! Welcome to Vietnam. A welcome pack
                                    containing a welcome letter, your trip
                                    itinerary, a Sapa information sheet and
                                    feedback card will be waiting for you at
                                    your hotel. Please ask your hotel's
                                    reception for the Intrepid welcome pack upon
                                    arrival. In any free time, dive into the
                                    barrage of bikes, boulevards and bustling
                                    life that characterise Hanoi. Take time to
                                    explore the French colonial architecture
                                    that decorates the tangled laneways, indulge
                                    in a decadent Vietnamese coffee while
                                    people-watching from street-side cafes, or
                                    step back in time on an exploration of the
                                    Old Quarter. This evening you will be picked
                                    up by your local guide from your Joining
                                    Point Hotel (see below), or from an
                                    alternate hotel located in Hanoi's Old
                                    Quarter (advised prior to departure),
                                    between 6.30pm-7pm. Your guide will first
                                    take you for an included dinner and to
                                    explain more about the Sapa region. After
                                    dinner, you'll be transferred to the train
                                    station, where your guide you will give you
                                    your tickets for the return train journey.
                                    Say farewell to your local guide before you
                                    board the overnight sleeper train bound for
                                    Lao Cai (departing approximately 9.30pm,
                                    approximately 8 hours journey time). The
                                    train journey is unaccompanied, and you may
                                    be sharing with locals or other travellers.
                                    Accommodation: Overnight sleeper train
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="v-timeline-item__divider">
                            <div class="v-timeline-item__dot">
                              <div class="v-timeline-item__inner-dot secondary">
                                <span data-v-4a7d27e3="" class="white--text"
                                  >1</span
                                >
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          data-v-4a7d27e3=""
                          class="
                            v-timeline-item v-timeline-item--fill-dot
                            theme--light
                          "
                        >
                          <div class="v-timeline-item__body">
                            <div
                              data-v-12c45e8a=""
                              data-v-4a7d27e3=""
                              class="
                                base-card
                                rounded-tr-xl rounded-bl-xl
                                my-4
                                mx-auto
                                v-card v-card--flat
                                v-sheet
                                theme--light
                              "
                            >
                              <div data-v-4a7d27e3="" class="py-4">
                                <div
                                  data-v-4a7d27e3=""
                                  class="
                                    v-card__title
                                    text-h6
                                    primary--text
                                    text-capitalize
                                  "
                                >
                                  day 2: sapa trek
                                </div>
                                <div data-v-4a7d27e3="" class="v-card__text">
                                  <div
                                    data-v-4a7d27e3=""
                                    style="
                                      white-space: pre-line;
                                      line-height: 1.6em;
                                    "
                                  >
                                    You’ll be met on arrival into Lao Cai in the
                                    early morning (approximately 6.00 am) by a
                                    local driver. Your driver will be picking up
                                    several other passengers travelling on to
                                    Sapa. Transfer to Sapa by minibus
                                    (approximately 1 hour), passing through
                                    dramatic scenery along the way. You have a
                                    free morning to relax and explore this
                                    fascinating hillside town. If the weather is
                                    feeling generous, enjoy unhindered views out
                                    towards the giant staircase of rice terraces
                                    that cascade down the side of the mountains.
                                    Otherwise, delight in the enigmatic mists
                                    that often shroud the Sapa hillsides. In the
                                    afternoon, begin a guided 2-3 hour moderate
                                    trek down to the hilltribe villages of Cat
                                    Cat, often taking a paved path and passing a
                                    waterfall. The villages are home to the
                                    H'mong people who originated from China
                                    about 300 years ago. The H'mong people are
                                    easily recognisable by their dark-blue or
                                    black clothing. The dye is made from the
                                    indigo plant, which is native to the area.
                                    H'mong women wear long aprons with
                                    embroidered waist-coats and have their hair
                                    rolled up into a turban-like hat, while the
                                    men wear a black skullcap. You are likely to
                                    encounter local H’mong traders, who are
                                    often described as persistent and aggressive
                                    in their sales techniques. Please respect
                                    that this approach is usually the result of
                                    the competitive nature of business, and only
                                    purchase items if you wish too. In the late
                                    afternoon, return to Sapa to spend the night
                                    in a hotel. Accommodation: Hotel
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="v-timeline-item__divider">
                            <div class="v-timeline-item__dot">
                              <div class="v-timeline-item__inner-dot secondary">
                                <span data-v-4a7d27e3="" class="white--text"
                                  >2</span
                                >
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          data-v-4a7d27e3=""
                          class="
                            v-timeline-item v-timeline-item--fill-dot
                            theme--light
                          "
                        >
                          <div class="v-timeline-item__body">
                            <div
                              data-v-12c45e8a=""
                              data-v-4a7d27e3=""
                              class="
                                base-card
                                rounded-tr-xl rounded-bl-xl
                                my-4
                                mx-auto
                                v-card v-card--flat
                                v-sheet
                                theme--light
                              "
                            >
                              <div data-v-4a7d27e3="" class="py-4">
                                <div
                                  data-v-4a7d27e3=""
                                  class="
                                    v-card__title
                                    text-h6
                                    primary--text
                                    text-capitalize
                                  "
                                >
                                  day 3: sapa trek
                                </div>
                                <div data-v-4a7d27e3="" class="v-card__text">
                                  <div
                                    data-v-4a7d27e3=""
                                    style="
                                      white-space: pre-line;
                                      line-height: 1.6em;
                                    "
                                  >
                                    This morning after storing your main luggage
                                    at your Sapa hotel, set off on a six hour
                                    guided trek (approximately 12 - 15
                                    kilometres). Pass along buffalo paths and
                                    trails, as well as through several hilltribe
                                    villages and resident minority groups such
                                    as Red Zao and Tay people. This is a
                                    spectacular walk, winding through stunning
                                    scenery and elegant rice paddy terraces. Be
                                    sure to watch your footing here as there can
                                    be uneven slopes, muddy patches, and rocky
                                    inclines. The idyllic countryside scenes are
                                    like something out of a storybook, and you
                                    will encounter some of the friendliest
                                    people you could ever hope to meet. Stop for
                                    lunch along the way, and finally spend the
                                    night in the home of a H'Mong family in Ta
                                    Van Mong Village. Perhaps take some time to
                                    explore the village after you arrive,
                                    wandering down to see the locals paddling in
                                    the Muong Hoa River and the Hmong guys
                                    cruising around on their motorbikes. You’ll
                                    enjoy an included meal of delicious
                                    Vietnamese dishes for dinner tonight,
                                    prepared by your hosts. Accommodation:
                                    Homestay
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="v-timeline-item__divider">
                            <div class="v-timeline-item__dot">
                              <div class="v-timeline-item__inner-dot secondary">
                                <span data-v-4a7d27e3="" class="white--text"
                                  >3</span
                                >
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          data-v-4a7d27e3=""
                          class="
                            v-timeline-item v-timeline-item--fill-dot
                            theme--light
                          "
                        >
                          <div class="v-timeline-item__body">
                            <div
                              data-v-12c45e8a=""
                              data-v-4a7d27e3=""
                              class="
                                base-card
                                rounded-tr-xl rounded-bl-xl
                                my-4
                                mx-auto
                                v-card v-card--flat
                                v-sheet
                                theme--light
                              "
                            >
                              <div data-v-4a7d27e3="" class="py-4">
                                <div
                                  data-v-4a7d27e3=""
                                  class="
                                    v-card__title
                                    text-h6
                                    primary--text
                                    text-capitalize
                                  "
                                >
                                  day 4: sapa/overnight train
                                </div>
                                <div data-v-4a7d27e3="" class="v-card__text">
                                  <div
                                    data-v-4a7d27e3=""
                                    style="
                                      white-space: pre-line;
                                      line-height: 1.6em;
                                    "
                                  >
                                    After a hearty, energy-giving early
                                    breakfast, set off on a 2-3 hour walk to Su
                                    Pan Village. Today’s trek is shorter, but
                                    the scenery is still beautiful. Take the
                                    road to Giang Ta Chai village of the Red
                                    Dzao minority via the paths between terraces
                                    and through bamboo forests. Walk past
                                    waterfalls where buffalo might cool
                                    themselves from the heat and cross a
                                    suspension bridge. Be sure to take it all in
                                    and make the most of the last of your time
                                    in these incredible surroundings. Cross
                                    Muong Hoa River, then head up to the
                                    mountain to visit the last village of the
                                    trek – Su Pan. Maybe grab a quick bowl of
                                    pho before meeting up with your vehicle for
                                    the 30 minute drive back to Sapa. Arriving
                                    in Sapa, you have a free afternoon to
                                    explore the town. Maybe get a massage to
                                    sooth trek-tired muscles, check out the
                                    local market selling produce, herbal
                                    remedies, and (very fresh) meats, pick up
                                    any Hilltribe crafts you might have had your
                                    eye on, or sit back with a drink while you
                                    look over the misty mountains. You will be
                                    picked up from your Sapa hotel between
                                    5-5.30 pm today by a local driver. You’ll
                                    then be transferred back to the to the Lao
                                    Cai train station this afternoon
                                    (approximately 1 hour). You will have some
                                    free time for an optional dinner before you
                                    board the overnight train to Hanoi. Boarding
                                    commences approximately 7.30pm for an 8.30
                                    pm departure (journey time approximately 8
                                    hours). Accommodation: Overnight sleeper
                                    train
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="v-timeline-item__divider">
                            <div class="v-timeline-item__dot">
                              <div class="v-timeline-item__inner-dot secondary">
                                <span data-v-4a7d27e3="" class="white--text"
                                  >4</span
                                >
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          data-v-4a7d27e3=""
                          class="
                            v-timeline-item v-timeline-item--fill-dot
                            theme--light
                          "
                        >
                          <div class="v-timeline-item__body">
                            <div
                              data-v-12c45e8a=""
                              data-v-4a7d27e3=""
                              class="
                                base-card
                                rounded-tr-xl rounded-bl-xl
                                my-4
                                mx-auto
                                v-card v-card--flat
                                v-sheet
                                theme--light
                              "
                            >
                              <div data-v-4a7d27e3="" class="py-4">
                                <div
                                  data-v-4a7d27e3=""
                                  class="
                                    v-card__title
                                    text-h6
                                    primary--text
                                    text-capitalize
                                  "
                                >
                                  day 5: hanoi
                                </div>
                                <div data-v-4a7d27e3="" class="v-card__text">
                                  <div
                                    data-v-4a7d27e3=""
                                    style="
                                      white-space: pre-line;
                                      line-height: 1.6em;
                                    "
                                  >
                                    Your adventure ends upon arrival at Hanoi
                                    train station in the early morning (around
                                    5am). The rest of the day is free for you to
                                    soak up the grace of this dynamic city
                                    that's the epitome of modern Vietnam.
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="v-timeline-item__divider">
                            <div class="v-timeline-item__dot">
                              <div class="v-timeline-item__inner-dot secondary">
                                <span data-v-4a7d27e3="" class="white--text"
                                  >5</span
                                >
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div data-v-35ae4c1c="" class="col-md-4 col-12">
                      <div
                        data-v-6d952711=""
                        data-v-35ae4c1c=""
                        class="text-center sticky"
                        price="327"
                      >
                        <div
                          data-v-12c45e8a=""
                          data-v-6d952711=""
                          class="
                            base-card
                            rounded-tr-xl rounded-bl-xl
                            px-4
                            v-card v-card--flat
                            v-sheet
                            theme--light
                          "
                        >
                          <div data-v-6d952711="" class="v-card__title">
                            Select Date and Travelers
                          </div>
                          <div
                            data-v-6d952711=""
                            class="v-picker v-card v-picker--date theme--light"
                          >
                            <div
                              class="
                                v-picker__body v-picker__body--no-title
                                theme--light
                              "
                              style="width: 290px"
                            >
                              <div>
                                <div class="v-date-picker-header theme--light">
                                  <button
                                    type="button"
                                    disabled="disabled"
                                    class="
                                      v-btn
                                      v-btn--disabled
                                      v-btn--flat
                                      v-btn--icon
                                      v-btn--round
                                      theme--light
                                      v-size--default
                                    "
                                    aria-label="Previous month"
                                  >
                                    <span class="v-btn__content"
                                      ><i
                                        aria-hidden="true"
                                        class="
                                          v-icon
                                          notranslate
                                          mdi mdi-chevron-left
                                          theme--light
                                        "
                                      ></i
                                    ></span>
                                  </button>
                                  <div class="v-date-picker-header__value">
                                    <div class="secondary--text">
                                      <button type="button">
                                        January 2022
                                      </button>
                                    </div>
                                  </div>
                                  <button
                                    type="button"
                                    class="
                                      v-btn v-btn--flat v-btn--icon v-btn--round
                                      theme--light
                                      v-size--default
                                    "
                                    aria-label="Next month"
                                  >
                                    <span class="v-btn__content"
                                      ><i
                                        aria-hidden="true"
                                        class="
                                          v-icon
                                          notranslate
                                          mdi mdi-chevron-right
                                          theme--light
                                        "
                                      ></i
                                    ></span>
                                  </button>
                                </div>
                                <div
                                  class="
                                    v-date-picker-table
                                    v-date-picker-table--date
                                    theme--light
                                  "
                                >
                                  <table>
                                    <thead>
                                      <tr>
                                        <th>S</th>
                                        <th>M</th>
                                        <th>T</th>
                                        <th>W</th>
                                        <th>T</th>
                                        <th>F</th>
                                        <th>S</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>
                                          <button
                                            type="button"
                                            class="
                                              v-btn
                                              v-btn--flat
                                              v-btn--text
                                              v-btn--rounded
                                              v-btn--disabled
                                              theme--light
                                            "
                                            disabled=""
                                          >
                                            <div class="v-btn__content">1</div>
                                          </button>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <button
                                            type="button"
                                            class="
                                              v-btn v-btn--text v-btn--rounded
                                              theme--light
                                            "
                                          >
                                            <div class="v-btn__content">2</div>
                                          </button>
                                        </td>
                                        <td>
                                          <button
                                            type="button"
                                            class="
                                              v-btn v-btn--text v-btn--rounded
                                              theme--light
                                            "
                                          >
                                            <div class="v-btn__content">3</div>
                                          </button>
                                        </td>
                                        <td>
                                          <button
                                            type="button"
                                            class="
                                              v-btn v-btn--text v-btn--rounded
                                              theme--light
                                            "
                                          >
                                            <div class="v-btn__content">4</div>
                                          </button>
                                        </td>
                                        <td>
                                          <button
                                            type="button"
                                            class="
                                              v-btn v-btn--text v-btn--rounded
                                              theme--light
                                            "
                                          >
                                            <div class="v-btn__content">5</div>
                                          </button>
                                        </td>
                                        <td>
                                          <button
                                            type="button"
                                            class="
                                              v-btn v-btn--text v-btn--rounded
                                              theme--light
                                            "
                                          >
                                            <div class="v-btn__content">6</div>
                                          </button>
                                        </td>
                                        <td>
                                          <button
                                            type="button"
                                            class="
                                              v-btn v-btn--text v-btn--rounded
                                              theme--light
                                            "
                                          >
                                            <div class="v-btn__content">7</div>
                                          </button>
                                        </td>
                                        <td>
                                          <button
                                            type="button"
                                            class="
                                              v-btn v-btn--text v-btn--rounded
                                              theme--light
                                            "
                                          >
                                            <div class="v-btn__content">8</div>
                                          </button>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <button
                                            type="button"
                                            class="
                                              v-btn v-btn--text v-btn--rounded
                                              theme--light
                                            "
                                          >
                                            <div class="v-btn__content">9</div>
                                          </button>
                                        </td>
                                        <td>
                                          <button
                                            type="button"
                                            class="
                                              v-btn v-btn--text v-btn--rounded
                                              theme--light
                                            "
                                          >
                                            <div class="v-btn__content">10</div>
                                          </button>
                                        </td>
                                        <td>
                                          <button
                                            type="button"
                                            class="
                                              v-btn v-btn--text v-btn--rounded
                                              theme--light
                                            "
                                          >
                                            <div class="v-btn__content">11</div>
                                          </button>
                                        </td>
                                        <td>
                                          <button
                                            type="button"
                                            class="
                                              v-btn v-btn--text v-btn--rounded
                                              theme--light
                                            "
                                          >
                                            <div class="v-btn__content">12</div>
                                          </button>
                                        </td>
                                        <td>
                                          <button
                                            type="button"
                                            class="
                                              v-btn v-btn--text v-btn--rounded
                                              theme--light
                                            "
                                          >
                                            <div class="v-btn__content">13</div>
                                          </button>
                                        </td>
                                        <td>
                                          <button
                                            type="button"
                                            class="
                                              v-btn v-btn--text v-btn--rounded
                                              theme--light
                                            "
                                          >
                                            <div class="v-btn__content">14</div>
                                          </button>
                                        </td>
                                        <td>
                                          <button
                                            type="button"
                                            class="
                                              v-btn v-btn--text v-btn--rounded
                                              theme--light
                                            "
                                          >
                                            <div class="v-btn__content">15</div>
                                          </button>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <button
                                            type="button"
                                            class="
                                              v-btn v-btn--text v-btn--rounded
                                              theme--light
                                            "
                                          >
                                            <div class="v-btn__content">16</div>
                                          </button>
                                        </td>
                                        <td>
                                          <button
                                            type="button"
                                            class="
                                              v-btn v-btn--text v-btn--rounded
                                              theme--light
                                            "
                                          >
                                            <div class="v-btn__content">17</div>
                                          </button>
                                        </td>
                                        <td>
                                          <button
                                            type="button"
                                            class="
                                              v-btn v-btn--text v-btn--rounded
                                              theme--light
                                            "
                                          >
                                            <div class="v-btn__content">18</div>
                                          </button>
                                        </td>
                                        <td>
                                          <button
                                            type="button"
                                            class="
                                              v-btn v-btn--text v-btn--rounded
                                              theme--light
                                            "
                                          >
                                            <div class="v-btn__content">19</div>
                                          </button>
                                        </td>
                                        <td>
                                          <button
                                            type="button"
                                            class="
                                              v-btn v-btn--text v-btn--rounded
                                              theme--light
                                            "
                                          >
                                            <div class="v-btn__content">20</div>
                                          </button>
                                        </td>
                                        <td>
                                          <button
                                            type="button"
                                            class="
                                              v-btn v-btn--text v-btn--rounded
                                              theme--light
                                            "
                                          >
                                            <div class="v-btn__content">21</div>
                                          </button>
                                        </td>
                                        <td>
                                          <button
                                            type="button"
                                            class="
                                              v-btn v-btn--text v-btn--rounded
                                              theme--light
                                            "
                                          >
                                            <div class="v-btn__content">22</div>
                                          </button>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <button
                                            type="button"
                                            class="
                                              v-btn v-btn--text v-btn--rounded
                                              theme--light
                                            "
                                          >
                                            <div class="v-btn__content">23</div>
                                          </button>
                                        </td>
                                        <td>
                                          <button
                                            type="button"
                                            class="
                                              v-btn v-btn--text v-btn--rounded
                                              theme--light
                                            "
                                          >
                                            <div class="v-btn__content">24</div>
                                          </button>
                                        </td>
                                        <td>
                                          <button
                                            type="button"
                                            class="
                                              v-btn v-btn--text v-btn--rounded
                                              theme--light
                                            "
                                          >
                                            <div class="v-btn__content">25</div>
                                          </button>
                                        </td>
                                        <td>
                                          <button
                                            type="button"
                                            class="
                                              v-btn v-btn--text v-btn--rounded
                                              theme--light
                                            "
                                          >
                                            <div class="v-btn__content">26</div>
                                          </button>
                                        </td>
                                        <td>
                                          <button
                                            type="button"
                                            class="
                                              v-btn v-btn--text v-btn--rounded
                                              theme--light
                                            "
                                          >
                                            <div class="v-btn__content">27</div>
                                          </button>
                                        </td>
                                        <td>
                                          <button
                                            type="button"
                                            class="
                                              v-btn v-btn--text v-btn--rounded
                                              theme--light
                                            "
                                          >
                                            <div class="v-btn__content">28</div>
                                          </button>
                                        </td>
                                        <td>
                                          <button
                                            type="button"
                                            class="
                                              v-btn v-btn--text v-btn--rounded
                                              theme--light
                                            "
                                          >
                                            <div class="v-btn__content">29</div>
                                          </button>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <button
                                            type="button"
                                            class="
                                              v-btn v-btn--text v-btn--rounded
                                              theme--light
                                            "
                                          >
                                            <div class="v-btn__content">30</div>
                                          </button>
                                        </td>
                                        <td>
                                          <button
                                            type="button"
                                            class="
                                              v-btn v-btn--text v-btn--rounded
                                              theme--light
                                            "
                                          >
                                            <div class="v-btn__content">31</div>
                                          </button>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div data-v-6d952711="" class="text-body-2">
                            You can book this tour any day
                          </div>
                          <div data-v-6d952711="" class="text-body-2">
                            from
                            <span
                              data-v-6d952711=""
                              class="
                                font-weight-medium
                                secondary--text
                                text--darken-1
                              "
                              >Sun Jan 02 2022</span
                            >
                            to
                            <span
                              data-v-6d952711=""
                              class="
                                font-weight-medium
                                secondary--text
                                text--darken-1
                              "
                              >Mon Dec 26 2022</span
                            >
                          </div>
                          <div data-v-6d952711="" class="row">
                            <div data-v-6d952711="" class="col">
                              <div
                                data-v-6d952711=""
                                class="
                                  v-input
                                  v-input--is-label-active
                                  v-input--is-dirty
                                  v-input--is-readonly
                                  theme--light
                                  v-text-field v-text-field--is-booted
                                "
                              >
                                <div class="v-input__prepend-outer">
                                  <div
                                    class="v-input__icon v-input__icon--prepend"
                                  >
                                    <i
                                      aria-hidden="true"
                                      class="
                                        v-icon
                                        notranslate
                                        mdi mdi-calendar
                                        theme--light
                                      "
                                    ></i>
                                  </div>
                                </div>
                                <div class="v-input__control">
                                  <div class="v-input__slot">
                                    <div class="v-text-field__slot">
                                      <label
                                        for="input-735"
                                        class="
                                          v-label v-label--active
                                          theme--light
                                        "
                                        style="
                                          left: 0px;
                                          right: auto;
                                          position: absolute;
                                        "
                                        >Start Date</label
                                      ><input
                                        role="button"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        id="input-735"
                                        readonly="readonly"
                                        type="text"
                                      />
                                    </div>
                                    <div class="v-input__append-inner">
                                      <div
                                        class="
                                          v-input__icon v-input__icon--clear
                                        "
                                      >
                                        <button
                                          type="button"
                                          aria-label="clear icon"
                                          class="
                                            v-icon
                                            notranslate
                                            v-icon--link
                                            mdi mdi-close
                                            theme--light
                                          "
                                        ></button>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="v-text-field__details">
                                    <div class="v-messages theme--light">
                                      <div class="v-messages__wrapper"></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div data-v-6d952711="" class="v-menu">
                                <!---->
                              </div>
                            </div>
                            <div data-v-6d952711="" class="col">
                              <div
                                data-v-6d952711=""
                                class="
                                  v-input
                                  v-input--is-label-active
                                  v-input--is-dirty
                                  v-input--is-readonly
                                  theme--light
                                  v-text-field v-text-field--is-booted
                                "
                              >
                                <div class="v-input__prepend-outer">
                                  <div
                                    class="v-input__icon v-input__icon--prepend"
                                  >
                                    <i
                                      aria-hidden="true"
                                      class="
                                        v-icon
                                        notranslate
                                        mdi mdi-calendar
                                        theme--light
                                      "
                                    ></i>
                                  </div>
                                </div>
                                <div class="v-input__control">
                                  <div class="v-input__slot">
                                    <div class="v-text-field__slot">
                                      <label
                                        for="input-741"
                                        class="
                                          v-label v-label--active
                                          theme--light
                                        "
                                        style="
                                          left: 0px;
                                          right: auto;
                                          position: absolute;
                                        "
                                        >Finish Date</label
                                      ><input
                                        role="button"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        id="input-741"
                                        readonly="readonly"
                                        type="text"
                                      />
                                    </div>
                                    <div class="v-input__append-inner">
                                      <div
                                        class="
                                          v-input__icon v-input__icon--clear
                                        "
                                      >
                                        <button
                                          type="button"
                                          aria-label="clear icon"
                                          class="
                                            v-icon
                                            notranslate
                                            v-icon--link
                                            mdi mdi-close
                                            theme--light
                                          "
                                        ></button>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="v-text-field__details">
                                    <div class="v-messages theme--light">
                                      <div class="v-messages__wrapper"></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div data-v-6d952711="" class="v-menu">
                                <!---->
                              </div>
                            </div>
                          </div>
                          <div data-v-793af51d="" data-v-6d952711="">
                            <div
                              data-v-793af51d=""
                              class="row text-body-2 align-center"
                            >
                              <div data-v-793af51d="" class="col">
                                <span data-v-793af51d="">1 Adult</span>
                              </div>
                              <div data-v-793af51d="" class="col">
                                <span data-v-793af51d="" class="pr-2">x</span
                                ><span
                                  data-v-793af51d=""
                                  class="secondary--text text--darken-1"
                                  >$327</span
                                >
                              </div>
                              <div data-v-793af51d="" class="col">
                                <div data-v-47964152="" data-v-793af51d="">
                                  <div
                                    data-v-47964152=""
                                    class="row align-center justify-end"
                                  >
                                    <button
                                      data-v-47964152=""
                                      type="button"
                                      class="
                                        mr-2
                                        v-btn
                                        v-btn--depressed
                                        v-btn--fab
                                        v-btn--round
                                        theme--light
                                        v-size--default
                                        secondary
                                      "
                                      style="height: 25px; width: 25px"
                                    >
                                      <span class="v-btn__content"
                                        ><i
                                          data-v-47964152=""
                                          aria-hidden="true"
                                          class="
                                            v-icon
                                            notranslate
                                            mdi mdi-minus
                                            theme--light
                                          "
                                        ></i
                                      ></span></button
                                    ><button
                                      data-v-47964152=""
                                      type="button"
                                      class="
                                        mr-6
                                        v-btn
                                        v-btn--depressed
                                        v-btn--fab
                                        v-btn--round
                                        theme--light
                                        v-size--default
                                        secondary
                                      "
                                      style="height: 25px; width: 25px"
                                    >
                                      <span class="v-btn__content"
                                        ><i
                                          data-v-47964152=""
                                          aria-hidden="true"
                                          class="
                                            v-icon
                                            notranslate
                                            mdi mdi-plus
                                            theme--light
                                          "
                                        ></i
                                      ></span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              data-v-793af51d=""
                              class="row text-body-2 align-center"
                            >
                              <div data-v-793af51d="" class="col">
                                <span data-v-793af51d="">0 Children</span>
                              </div>
                              <div data-v-793af51d="" class="col">
                                <span data-v-793af51d="" class="pr-2">x</span
                                ><span
                                  data-v-793af51d=""
                                  class="secondary--text text--darken-1"
                                  >$327</span
                                ><span data-v-793af51d="" class="px-2">x</span
                                ><span data-v-793af51d="">75%</span>
                              </div>
                              <div data-v-793af51d="" class="col">
                                <div data-v-47964152="" data-v-793af51d="">
                                  <div
                                    data-v-47964152=""
                                    class="row align-center justify-end"
                                  >
                                    <button
                                      data-v-47964152=""
                                      type="button"
                                      class="
                                        mr-2
                                        v-btn
                                        v-btn--depressed
                                        v-btn--fab
                                        v-btn--round
                                        theme--light
                                        v-size--default
                                        secondary
                                      "
                                      style="height: 25px; width: 25px"
                                    >
                                      <span class="v-btn__content"
                                        ><i
                                          data-v-47964152=""
                                          aria-hidden="true"
                                          class="
                                            v-icon
                                            notranslate
                                            mdi mdi-minus
                                            theme--light
                                          "
                                        ></i
                                      ></span></button
                                    ><button
                                      data-v-47964152=""
                                      type="button"
                                      class="
                                        mr-6
                                        v-btn
                                        v-btn--depressed
                                        v-btn--fab
                                        v-btn--round
                                        theme--light
                                        v-size--default
                                        secondary
                                      "
                                      style="height: 25px; width: 25px"
                                    >
                                      <span class="v-btn__content"
                                        ><i
                                          data-v-47964152=""
                                          aria-hidden="true"
                                          class="
                                            v-icon
                                            notranslate
                                            mdi mdi-plus
                                            theme--light
                                          "
                                        ></i
                                      ></span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              data-v-793af51d=""
                              class="row text-body-2 align-center"
                            >
                              <div data-v-793af51d="" class="col">
                                <span data-v-793af51d="">0 Infant</span>
                              </div>
                              <div data-v-793af51d="" class="col">
                                <span data-v-793af51d="" class="pr-2">x</span
                                ><span
                                  data-v-793af51d=""
                                  class="secondary--text text--darken-1"
                                  >$327</span
                                ><span data-v-793af51d="" class="px-2">x</span
                                ><span data-v-793af51d="">0%</span>
                              </div>
                              <div data-v-793af51d="" class="col">
                                <div data-v-47964152="" data-v-793af51d="">
                                  <div
                                    data-v-47964152=""
                                    class="row align-center justify-end"
                                  >
                                    <button
                                      data-v-47964152=""
                                      type="button"
                                      class="
                                        mr-2
                                        v-btn
                                        v-btn--depressed
                                        v-btn--fab
                                        v-btn--round
                                        theme--light
                                        v-size--default
                                        secondary
                                      "
                                      style="height: 25px; width: 25px"
                                    >
                                      <span class="v-btn__content"
                                        ><i
                                          data-v-47964152=""
                                          aria-hidden="true"
                                          class="
                                            v-icon
                                            notranslate
                                            mdi mdi-minus
                                            theme--light
                                          "
                                        ></i
                                      ></span></button
                                    ><button
                                      data-v-47964152=""
                                      type="button"
                                      class="
                                        mr-6
                                        v-btn
                                        v-btn--depressed
                                        v-btn--fab
                                        v-btn--round
                                        theme--light
                                        v-size--default
                                        secondary
                                      "
                                      style="height: 25px; width: 25px"
                                    >
                                      <span class="v-btn__content"
                                        ><i
                                          data-v-47964152=""
                                          aria-hidden="true"
                                          class="
                                            v-icon
                                            notranslate
                                            mdi mdi-plus
                                            theme--light
                                          "
                                        ></i
                                      ></span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </v-tab-item>
                <v-tab-item>
                  <v-list three-line="true" avatar="true">
                    <v-list-item-group v-model="item" color="primary">
                      <v-list-item
                        v-for="(item, i) in items"
                        :key="i"
                        inactive="true"
                      >
                        <v-list-item-avatar>
                          <v-img :src="item.avatar"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-content>
                          <v-list-item-title
                            v-html="item.title"
                          ></v-list-item-title
                          ><v-rating
                            v-model="rating"
                            class=""
                            background-color="warning lighten-3"
                            color="warning"
                            dense
                          ></v-rating>
                          <v-list-item-subtitle
                            v-html="item.subtitle"
                          ></v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list-item-group>
                  </v-list>
                </v-tab-item>
              </v-tabs>
            </div>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  props: ["id"],
  computed: {
    product() {
      return this.$store.state.product;
    },
  },
  mounted() {
    this.$store.dispatch("getProduct", this.id);
  },
  methods: {
    addToCart() {
      this.$store.dispatch("addProductToCart", {
        product: this.product,
        quanntity: 1,
      });
    },
  },
  data: () => ({
    rating: 4.5,
    breadcrums: [
      {
        text: "Home",
        disabled: false,
        href: "breadcrumbs_home",
      },
      {
        text: "Clothing",
        disabled: false,
        href: "breadcrumbs_clothing",
      },
      {
        text: "T-Shirts",
        disabled: true,
        href: "breadcrumbs_shirts",
      },
    ],
    item: 5,
    items: [
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        title: "Lorem ipsum dolor?",
        subtitle:
          "<span class='text--primary'>Ali Connors</span> &mdash; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Tincidunt arcu non sodales neque sodales ut etiam. Lectus arcu bibendum at varius vel pharetra. Morbi tristique senectus et netus et malesuada.\n" +
          "\n",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        title:
          'Lorem ipsum dolor <span class="grey--text text--lighten-1">4</span>',
        subtitle:
          "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        title: "Lorem ipsum dolor",
        subtitle:
          "<span class='text--primary'>Sandra Adams</span> &mdash; Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
        title: "Lorem ipsum dolor",
        subtitle: "",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
        title: "Lorem ipsum dolor",
        subtitle:
          "<span class='text--primary'>Britta Holt</span> &mdash; Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
    ],
  }),
};
</script>

<style></style>
