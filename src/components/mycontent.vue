<template>
  <!-- Content Wrapper. Contains page content -->
  <div class="zoomIn animated content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        Page Header
        <small>Optional description</small>
      </h1>
      <ol class="breadcrumb">
        <li>
        </li>
        <li class="active">Here</li>
      </ol>
    </section>
    <!-- Main content -->
    <section class="content">
      <!-- Your Page Content Here -->
      <h2>Hello World!</h2>
      <div class="nav-tabs-custom">
        <ul class="nav nav-tabs">
          <li class=""><a href="#tab_1" data-toggle="tab" aria-expanded="false">Tab 1</a></li>
          <li class=""><a href="#tab_2" data-toggle="tab" aria-expanded="false">Tab 2</a></li>
          <li class="active"><a href="#tab_3" data-toggle="tab" aria-expanded="true">Tab 3</a></li>
        </ul>
        <div class="tab-content">
          <div class="tab-pane" id="tab_1">
            <b>How to use:</b>
          </div>
          <div class="tab-pane" id="tab_2">
            The European languages are members of the same family.
          </div>
          <div class="tab-pane active" id="tab_3">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </div>
        </div>
      </div>

      <a class="btn btn-app">
        <i class="fa fa-edit"></i> 編輯
      </a>
      <a class="btn btn-app">
        <i class="fa fa-times"></i> 刪除
      </a>
      <a class="btn btn-app">
        <i class="fa fa-save"></i> 保存
      </a>
      <!-- Tab -->
      <div>
        <div class="col-md-12">
          <div class="box box-solid">
            <div class="box-header with-border">
              <h3 class="box-title">Collapsible Accordion</h3>
            </div>
            <!-- /.box-header -->
            <div class="box-body">
              <div class="box-group" id="accordion">
                <!-- we are adding the .panel class so bootstrap.js collapse plugin detects it -->
                <div class="panel box box-primary">
                  <div class="box-header with-border">
                    <h4 class="box-title">
                      <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                        Collapsible Group Item #1
                      </a>
                    </h4>
                  </div>
                  <div id="collapseOne" class="panel-collapse collapse in">
                    <div class="box-body">
                      <h2>1</h2>
                    </div>
                  </div>
                </div>
                <div class="panel box box-danger">
                  <div class="box-header with-border">
                    <h4 class="box-title">
                      <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
                        Collapsible Group Danger
                      </a>
                    </h4>
                  </div>
                  <div id="collapseTwo" class="panel-collapse collapse">
                    <div class="box-body">
                      <h2>2</h2>
                    </div>
                  </div>
                </div>
                <div class="panel box box-success">
                  <div class="box-header with-border">
                    <h4 class="box-title">
                      <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree">
                        Collapsible Group Success
                      </a>
                    </h4>
                  </div>
                  <div id="collapseThree" class="panel-collapse collapse">
                    <div class="box-body">
                      <h2>3</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->
        </div>
      </div>
      <!-- Alert -->
      <div class="container">
        <div class="alert alert-danger alert-dismissible" data-dismiss="alert" aria-hidden="true">
          <h4><i class="icon fa fa-ban"></i> 提示!</h4>
          刪除成功!
        </div>
        <div class="alert alert-info alert-dismissible" data-dismiss="alert" aria-hidden="true">
          <h4><i class="icon fa fa-ban"></i> 提示!</h4>
          刪除成功!
        </div>
        <div class="alert alert-warning alert-dismissible" data-dismiss="alert" aria-hidden="true">
          <h4><i class="icon fa fa-ban"></i> 提示!</h4>
          刪除成功!
        </div>
        <div class="alert alert-success alert-dismissible" data-dismiss="alert" aria-hidden="true">
          <h4><i class="icon fa fa-check"></i> 提示!</h4>
          刪除成功!
        </div>
      </div>
    </section>
  </div>
</template>
<script>

</script>
