

<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-xl-10 col-lg-12 col-md-9">
        <div class="card shadow-sm my-5">
          <div class="card-body p-0">
            <div class="row">
              <div class="col-lg-12">
                <div class="login-form">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">Вхід</h1>
                  </div>
                  <form class="user">
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail"
                        aria-describedby="emailHelp"
                        placeholder="Email"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="password"
                        class="form-control"
                        id="exampleInputPassword"
                        placeholder="Пароль"
                      />
                    </div>
                    <div class="form-group">
                      <div
                        class="custom-control custom-checkbox small"
                        style="line-height: 1.5rem;"
                      >
                        <input type="checkbox" class="custom-control-input" id="customCheck" />
                        <label class="custom-control-label" for="customCheck">Запам`ятати мене</label>
                      </div>
                    </div>
                    <div class="form-group">
                      <a href="index.html" class="btn btn-primary btn-block">Підтвердити</a>
                    </div>
                  </form>
                  <hr />
                  <div class="text-center">
                    <router-link to="/user/register" class="font-weight-bold small">Створити профіль</router-link>
                  </div>
                  <div class="text-center">
                    <router-link to="/user/forget" class="font-weight-bold small">Відновити пароль</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>